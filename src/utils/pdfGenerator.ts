import logo from "../assets/cognitiveLogo.webp";

export const generatePdfFromUI = async (element: HTMLElement): Promise<Blob> => {
  const [html2canvasModule, jsPDFModule] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);
  const html2canvas = html2canvasModule.default;
  const jsPDF = jsPDFModule.default;

  // Use a fixed window width to ensure the layout remains consistent
  // and doesn't get squeezed or stretched based on the user's monitor size.
  const canvas = await html2canvas(element, {
    scale: 2, // Use 2 for better text clarity in the PDF
    useCORS: true,
    allowTaint: true,
    scrollY: -window.scrollY,
    windowWidth: 1000,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.6);
  const pdf = new jsPDF("p", "mm", "a4", true);

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;

  const usableWidth = pageWidth - margin * 2;
  const imgHeight = (canvas.height * usableWidth) / canvas.width;

  const logoImg = new Image();
  logoImg.src = logo;

  await new Promise((resolve) => {
    logoImg.onload = resolve;
  });

  // Draw the logo onto a canvas with a white background to prevent
  // transparent areas from turning black when converted to JPEG/PDF.
  const logoCanvas = document.createElement("canvas");
  logoCanvas.width = logoImg.width || 350;
  logoCanvas.height = logoImg.height || 120;
  const ctx = logoCanvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, logoCanvas.width, logoCanvas.height);
    ctx.drawImage(logoImg, 0, 0);
  }
  const logoDataUrl = logoCanvas.toDataURL("image/jpeg", 1.0);

  pdf.addImage(logoDataUrl, "JPEG", margin, 10, 35, 12);

  pdf.setFontSize(20);
  pdf.setTextColor(30, 64, 175);
  pdf.text("RCM AI Readiness Assessment", pageWidth / 2, 35, {
    align: "center",
  });

  let finalImgWidth = usableWidth;
  let finalImgHeight = imgHeight;
  let finalMarginX = margin;

  const maxAvailableHeight = pageHeight - 45; // 40mm top offset + 5mm bottom margin

  // If the content is taller than the page but not excessively so (e.g., less than 1.4x),
  // scale it down to fit perfectly on one page to avoid cutting elements in half.
  if (
    imgHeight > maxAvailableHeight &&
    imgHeight <= maxAvailableHeight * 1.4
  ) {
    const ratio = maxAvailableHeight / imgHeight;
    finalImgHeight = maxAvailableHeight;
    finalImgWidth = usableWidth * ratio;
    finalMarginX = margin + (usableWidth - finalImgWidth) / 2;

    pdf.addImage(
      imgData,
      "JPEG",
      finalMarginX,
      40,
      finalImgWidth,
      finalImgHeight
    );
  } else {
    // Standard multi-page logic for very long content
    let position = 40;
    pdf.addImage(imgData, "JPEG", margin, position, usableWidth, imgHeight);

    let heightLeft = imgHeight - (pageHeight - 40);

    while (heightLeft > 0) {
      position = position - pageHeight; // Shift up by one full page height
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", margin, position, usableWidth, imgHeight);
      heightLeft -= pageHeight;
    }
  }

  return pdf.output("blob");
};
