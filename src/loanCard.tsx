import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Loan } from "./types";
import { formatDateWithoutYear, formatNumberWithCommas } from "./utils";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface LoanCardProps {
  loan: Loan;
}
export default function LoanCard(props: LoanCardProps) {
  const formattedNumber = formatNumberWithCommas(
    props.loan.actualBalance.value
  );
  const dollarPart = formattedNumber.slice(0, -3);
  const centsPart = formattedNumber.slice(-3);

  return (
    <Card
      sx={{
        width: 366,
        backgroundColor: "var(--white)",
        boxShadow: "-3px 3px 20px 2px rgba(0, 0, 0, 0.20)",
        borderRadius: 2,
        marginBottom: "5px",
        marginTop: "10px",
        marginLeft: "10px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                alignSelf: "stretch",
              }}
            >
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ fontSize: 12, fontWeight: 700 }}
              >
                {props.loan.description}
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  fontSize: 12,
                  fontStyle: "italic",
                  color: "var(--tertiary-theme-color)",
                }}
              >
                (*{props.loan.accountId.slice(-4)})
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                alignSelf: "stretch",
                color: "var(--dark-grey)",
                mt: -1,
              }}
            >
              <Typography
                sx={{ fontSize: 34, fontWeight: 400 }}
                component="span"
              >
                ${dollarPart}
                <Typography
                  sx={{
                    fontSize: 24,
                    verticalAlign: "baseline",
                    position: "relative",
                    top: "-0.3em",
                  }}
                  component="span"
                >
                  {centsPart}
                </Typography>
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 12, color: "var(--black)", mt: -1 }}>
              Remaining Balance
            </Typography>
          </Box>
          <KeyboardArrowRightIcon fontSize="large" />
          <Box
            sx={{
              alignSelf: "stretch",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 24,
              height: 24,
            }}
          ></Box>
        </Box>
        <Button
          sx={{
            alignSelf: "stretch",
            height: 48,
            backgroundColor: "var(--secondary-theme-color)",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 15,
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              filter: "brightness(90%)",
            },
          }}
        >
          ${formatNumberWithCommas(props.loan.minimumPayment)} due on{" "}
          {formatDateWithoutYear(props.loan.paymentDueDate)}
        </Button>
      </CardContent>
    </Card>
  );
}
