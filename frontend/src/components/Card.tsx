import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface MultiActionAreaCardProps {
  image: string;
  jobdecs: string;
  fromIt: string;
  title: string;
}

export default function MultiActionAreaCard({
  image,
  jobdecs,
  fromIt,
  title,
}: MultiActionAreaCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} <br />
            <span className="text-sm">{fromIt}</span>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {jobdecs}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
