import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-section">
        <input
          type="radio"
          name="slider"
          title="slide1"
          defaultChecked="checked"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide2"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide3"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide4"
          className="slider__nav"
        />
        <input
          type="radio"
          name="slider"
          title="slide5"
          className="slider__nav"
        />
        <div className="slider__inner">
          <div className="slider__contents">
            <img
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/271436339_1298875060536777_2801491426567111401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dwQSTIjvMB0AX_eCOIZ&tn=PnRGVxclrxdhZSmc&_nc_ht=scontent.fbir1-1.fna&oh=00_AT-9vCRVocNgpRKUcxUcHLniDAWpQTSKp7gd8RbPp_MHdA&oe=629B4744"
              alt=""
              srcset=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <quote>”</quote>
            <p className="slider__txt">
              You all bend over backwards to get it done. Inside sales and the
              Account Managers are great! It's your service...
            </p>
            <h2 className="slider__caption">Nitika Singh Adhikari| Student</h2>
          </div>
          <div className="slider__contents">
            <img
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/261311017_2988662838062738_4567287146021184338_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cOwcbWTGoxwAX9Ehr9D&_nc_ht=scontent.fbir1-1.fna&oh=00_AT-4lA3felLr9mvoykzqOpCtBMwpueU87iYSSjw2hgPO7g&oe=629A94C1"
              alt=""
              srcset=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <quote>”</quote>
            <p className="slider__txt">
              We love you guys. It's easy to order, we get shipments quick and
              my rep solves tough problems the right way. We get answers that
              work.
            </p>
            <h2 className="slider__caption">Anziela Karki | Student</h2>{" "}
          </div>
          <div className="slider__contents">
            <img
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/272636012_105638358696291_1109864787998408675_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wzZZ0_rrIcwAX_JT6wx&_nc_ht=scontent.fbir1-1.fna&oh=00_AT_uoSfhqubK6s4Gc7TLJGmlXhbOLWyhneRn8JP0Wa7Z7w&oe=629AAAB7"
              alt=""
              srcset=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <quote>”</quote>
            <p className="slider__txt">
              It's the long-term relationship we have with Proheat that keeps me
              calling you guys.
            </p>
            <h2 className="slider__caption">Anish Tiwari | Student</h2>{" "}
          </div>
          <div className="slider__contents">
            <img
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/252177500_1237094303370078_7720845003711467618_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ocuDMhy8ReYAX8r3LwE&tn=PnRGVxclrxdhZSmc&_nc_ht=scontent.fbir1-1.fna&oh=00_AT9pNi0bHI9MA2EOgIv2YJPWTZ-pYdQgJADugwDu7esJVQ&oe=629C1FFC"
              alt=""
              srcset=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <quote>”</quote>
            <p className="slider__txt">
              You answer my questions, always takes care of problems, and I
              never have a hassle.
            </p>
            <h2 className="slider__caption">Jaya Mishra Jha | Student</h2>{" "}
          </div>
          <div className="slider__contents">
            <img
              src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/262054149_102028018999610_7991553868409074906_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rjnoenm9vvcAX8piJBy&_nc_ht=scontent.fbir1-1.fna&oh=00_AT8yPB8vnuArM4fnFBlYiDs1FyIF608fXt2HgmrVILJBRw&oe=629B3BDB"
              alt=""
              srcset=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <quote>”</quote>
            <p className="slider__txt">
              Proheat's staff are all so friendly and everybody goes above and
              beyond.
            </p>
            <h2 className="slider__caption">Bhim Luitel | Student</h2>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
