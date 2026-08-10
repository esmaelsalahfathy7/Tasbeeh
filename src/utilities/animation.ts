import { keyframes } from "@mui/material";

export const goUp = keyframes`
0%,100%{
transform: translateY(-25%);
animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
}
50% {
transform: translateY(0);
animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  30% {
    transform: scale(0.90);
  }

  100% {
    transform: scale(1);
  }
`;

export const ping = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 1;
  }

  75%,
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
`;