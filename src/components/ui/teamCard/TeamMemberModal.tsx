// import {
//   Dialog,
//   DialogContent,
//   IconButton,
//   Avatar,
//   Typography,
//   Box,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// interface Props {
//   open: boolean;
//   onClose: () => void;
//   name: string;
//   designation?: string;
//   image?: string;
//   description?: string;
// }

// const TeamMemberModal: React.FC<Props> = ({
//   open,
//   onClose,
//   name,
//   designation,
//   image,
//   description,
// }) => {
//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
//       <DialogContent sx={{ p: 4, position: "relative" }}>
//         <IconButton
//           onClick={onClose}
//           sx={{ position: "absolute", top: 12, right: 12 }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <Box display="flex" alignItems="center" gap={3} mb={1}>
//           <Avatar src={image} alt={name} sx={{ width: 100, height: 100 }} />
//           <Box>
//             <Typography variant="h6" fontWeight={700}>
//               {name}
//             </Typography>
//             <Typography color="primary" fontWeight={500}>
//               {designation}
//             </Typography>
//           </Box>
//         </Box>

//         <Typography
//           sx={{
//             lineHeight: 1.8,
//             color: "text.secondary",

//             fontSize: 16,
//           }}
//         >
//           {description}
//         </Typography>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default TeamMemberModal;

import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  member: {
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}

const TeamMemberModal = ({ open, onClose, member }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : 4,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          overflow: "visible", 
        },
      }}
    >
      <DialogContent
        sx={{
          // p: isMobile ? 3 : 6,
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Close Button */}

        {/* <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton> */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: -18,
              right: -18, 
              width: 38,
              height: 38,
              background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
              color: "#fff",
              boxShadow: "0 10px 25px rgba(14,165,233,0.4)",
              border: "4px solid white",
              transition: "all 0.3s ease",

              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 14px 30px rgba(14,165,233,0.6)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems={isMobile ? "center" : "flex-start"}
            gap={isMobile ? 4 : 6}
          >
            {/* IMAGE SECTION */}
            <Box
              sx={{
                width: isMobile ? 180 : 220,
                height: isMobile ? 180 : 220,
                borderRadius: "50%",
                background: "conic-gradient(#f97316, #3b82f6, #f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: isMobile ? 160 : 200,
                  height: isMobile ? 160 : 200,
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.title}
                  sx={{
                    width: isMobile ? 140 : 180,
                    height: isMobile ? 140 : 180,
                  }}
                />
              </Box>
            </Box>

            {/* TEXT SECTION */}
            <Box flex={1} textAlign={isMobile ? "center" : "left"}>
              <Typography variant={isMobile ? "h5" : "h4"} fontWeight={700}>
                {member.title}
              </Typography>

              <Typography
                sx={{
                  color: "#3b82f6",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {member.subtitle}
              </Typography>

              <Typography
                sx={{
                  lineHeight: 1.8,
                  color: "text.secondary",
                  fontSize: isMobile ? 14 : 16,
                  // whiteSpace: "pre-line",
                }}

                //           sx={{
                //             lineHeight: 1.8,
                //             color: "text.secondary",

                //             fontSize: 16,
                //           }}
              >
                {member.description}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
