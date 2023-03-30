import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import business  from "../assets/business.png";
import worker  from "../assets/worker.png";
import { Grid } from "@mui/material";

type LastStepProps = {
  setStep: (newStep: number) => void;
};

const Category = ({ setStep }: LastStepProps) => {
  return (
    <>
    <h1>Choose Your Category</h1>
    <Grid container spacing={2}>
      <Card sx={{ maxWidth: 345 }} className="my-6">
        <CardMedia
          sx={{ height: 140 }}
          image={business}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Business
          </Typography>
          <Typography variant="body2" color="text.secondary">
          easily pay their employees with any cryptocurrency or fiat currency, which could potentially lead to faster, more secure, 
          and cheaper transactions than traditional payroll methods.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Get Started</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={worker}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Worker
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get Paid from any Client or Employer Safely and easily.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Get Started</Button>
        </CardActions>
      </Card>
    </Grid>
  </>
  );
};

export default Category;
