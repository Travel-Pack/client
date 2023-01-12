import { useState } from "react"

export default function CouponCard({ promo }) {
  const [isShown, setIsShown] = useState(false)

  const showCode = (value) => {
    setIsShown(value)
  }
  return (
    <div className="flex items-center justify-center m-2">
      <div
        className=""
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 100%)",
          color: "#fff",
          "text-align": "center",
          padding: "40px 80px",
          "border-radius": "15px",
          "box-shadow": "0 10px 10px 0 rgba(0,0,0,0.15)",
          position: "relative",
          height: "300px",
        }}>
        <div className="flex justify-center items-center">
          <img
            src="/images/travelPack.png"
            alt="travelPack-Logo"
            className="h-16 sm:h-16 bg-white rounded-full p-1"
          />
          <p className="mx-3 text-3xl">&</p>
          <img
            src={promo.logo}
            className="h-10 rounded-lg mb-3 items-center justify-center"
          />
        </div>
        <h3 className="text-2xl font-normal leading-10 mx-8 my-2">{promo.value}</h3>
        <p>{promo.desc}</p>
        <div className="m-5 items-center" onClick={() => showCode(!isShown)}>
          {isShown ? (
            <span
              id="cpnCode"
              style={{
                border: "1px dashed #fff",
                padding: "10px 20px",
              }}>
              {promo.code}
            </span>
          ) : (
            <span
              id="cpnBtn"
              style={{
                border: "1px solid #fff",
                background: "#fff",
                padding: "10px 20px",
                color: "#7158fe",
                cursor: "pointer",
              }}>
              Show Code
            </span>
          )}
        </div>
        <p className="text-sm">{promo.period}</p>
        <div
          className="bg-white"
          style={{
            width: "50px",
            height: "50px",
            "border-radius": "50%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "-25px",
          }}
        />
        <div
          className="bg-white"
          style={{
            width: "50px",
            height: "50px",
            "border-radius": "50%",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "-25px",
          }}
        />
      </div>
    </div>
  )
}

/*

/*the complete project is in the following link:
https://github.com/vkive/coupon-code.git
Follow me on Codepen

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
  
}
.container{
  width: 100%;
  height: 100vh;
  background: #f0fff3;
  display: flex;
  align-items: center;
  justify-content: center;

}
.coupon-card{
  background: linear-gradient(135deg, #7158fe, #9d4de6);
  color: #fff;
  text-align: center;
  padding: 40px 80px;
  border-radius: 15px;
  box-shadow: 0 10px 10px 0 rgba(0,0,0,0.15);
  position: relative;

}
.logo{
  width: 80px;
  border-radius: 8px;
  margin-bottom: 20px;

}
.coupon-card h3{
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;

}
.coupon-card p{
  font-size: 15px;

}
.coupon-row{
  display: flex;
  align-items: center;
  margin: 25px auto;
  width: fit-content;

}
#cpnCode{
  border: 1px dashed #fff;
  padding: 10px 20px;
  border-right: 0;

}
#cpnBtn{
  border: 1px solid #fff;
  background: #fff;
  padding: 10px 20px;
  color: #7158fe;
  cursor: pointer;
}
.circle1, .circle2{
  background: #f0fff3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

}
.circle1{
  left: -25px;
}
.circle2{
  right: -25px;
}

*/
