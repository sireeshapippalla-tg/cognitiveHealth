// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.replace("#", ""));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//         return;
//       }
//     }

//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);

//   return null;
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // 👈 header height
          behavior: "smooth",
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
};

export default ScrollToTop;
