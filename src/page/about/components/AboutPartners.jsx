import styled from "styled-components"

const AboutPartners = () => {
    return(
        <Container>
            <h2>our partners & clients</h2>
            <img alt="partners" src=" http://intoon.newbird0412.gethompy.com/wp-content/uploads/2018/11/clients_logo.png"/>
        </Container>
    )
}

const Container = styled.div`
 max-width: 1200px;
    padding-top: 5%;
    padding-right: 30px;
    padding-bottom: 5%;
    padding-left: 30px;
    margin: 0px auto 20px auto;
    visibility: visible;
    animation-duration: 0.7s;
    position: relative;
        animation: fadeInUp 1s;

`
export default AboutPartners