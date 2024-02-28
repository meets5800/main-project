import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./CSS/footer.css";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className="m-1" role="button">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="mb-4 sm:text-[16px] text-[12px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="w-[100%]">
          <MDBRow>
            <div className="all sm:text-[16px] text-[12px]">
              <div className="first">
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <p className="text-uppercase font-bold sm:text-[20px] text-[15px]">
                    Company
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="text-white">About</div>
                    </li>
                    <li>
                      <div className="text-white">Careers</div>
                    </li>
                    <li>
                      <div className="text-white">Team</div>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <p className="text-uppercase font-bold sm:text-[20px] text-[15px]">
                    Contact us
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="text-white">Help and Support</div>
                    </li>
                    <li>
                      <div className="text-white">Partner with us</div>
                    </li>
                    <li>
                      <div className="text-white">Ride with us</div>
                    </li>
                  </ul>
                </MDBCol>
              </div>

              <div className="second">
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <p className="text-uppercase font-bold sm:text-[20px] text-[15px]">
                    Legal
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="text-white">Terms & Condition</div>
                    </li>
                    <li>
                      <div className="text-white">Cookie Policy</div>
                    </li>
                    <li>
                      <div className="text-white">Privacy Policy</div>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <p className="text-uppercase font-bold sm:text-[20px] text-[15px]">
                    We Deliver to:
                  </p>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <div className="text-white">Surat</div>
                    </li>
                    <li>
                      <div className="text-white">Ahmedabad</div>
                    </li>
                    <li>
                      <div className="text-white">Bhavnagar</div>
                    </li>
                    <li>
                      <div className="text-white">Anand</div>
                    </li>
                  </ul>
                </MDBCol>
              </div>
            </div>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <div className="text-white sm:text-[16px] text-[12px]">
          QuickFood.com
        </div>
      </div>
    </MDBFooter>
  );
}
