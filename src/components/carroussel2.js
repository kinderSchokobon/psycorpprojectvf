import React from 'react';
import {Link} from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import styled from "styled-components";

export default function Carroussel2(props) {
    const StyledMDBCarousel = styled(MDBCarousel)`
    width: 100%;
    `;
  return (
    <StyledMDBCarousel className="carouself" showIndicators showControls fade interval={3000}>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(11).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Make new friends from different countries</h5>
            <p>Psy corp enables you discovering new cultures with the posts section</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Discuss</h5>
            <p className="lower">Psy Corp is a brand new way to share your feelings with your friends</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5><Link to={(props.user !== undefined) ? ("") : ("/signin")}>Sign in</Link></h5>
            <p>You have to <Link to={(props.user !== undefined) ? ("") : ("/signin")}> Sign in </Link> to enable the app !</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </StyledMDBCarousel>
  );
}