import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import lista from "./lista";

const Preguntas = () => {

    const preguntas = () => {
        return (
            lista.map((p, i) => {
                return (
                    <Accordion key={i} sx={{width: {xs: "100%", sm: "80%"}}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{p.pregunta}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{p.respuesta}</Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })
        )
    }
    return (
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
            }}
        >
            <Typography variant="h3" sx={{width:"100%", textAlign:"center", marginTop: 3, marginBottom: 4}}>
                Preguntas y respuestas
            </Typography>
            {preguntas()}
        </Box>
    )
}

export default Preguntas;