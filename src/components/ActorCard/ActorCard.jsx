import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'

function ActorCard({actor}) {
  return (
    <div className="actorCard">
        <Card sx={{maxWidth: '15rem'}}>
            <CardActionArea>
                <CardMedia 
                component="img"
                height="140"
                image={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={actor.original_name}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {actor.original_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {actor.character}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

    </div>
  )
}

export default ActorCard