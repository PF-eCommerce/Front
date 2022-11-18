import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled('div')({
    backgroundColor: "white",
    width: "120px",
    height: "100px",
    borderRadius: "20px",
    boxShadow: "0px 0px 5px #424242",
    textDecoration: "none",
})
const Title = styled('p')({
    paddingLeft: "10px",
    paddingTop: "10px",
    fontSize: "15px",
    fontWeight: "bold",
    color: "gray",
})
const UserNum = styled('p')({
    paddingLeft: "10px",
    fontSize: "30px",
    color:"#F44336"
})
const SubTitle = styled('p')({
    paddingLeft: "10px",
    fontSize:"14px",
    textDecoration:"underline",
    color:"#F44336"
})

export default function Users() {
    return (
        <Container>
            <Link to={"/admin/users"}>
                <Title>Usuarios</Title>
                <UserNum>{12}</UserNum>
                <SubTitle>Ver todos</SubTitle>
            </Link>
        </Container>
    )
}
//TODO: Conectar UserNum a redux