import Image from "next/image"

const missionPoints = [
  "Create impactful and timeless logos",
  "Help brands stand out",
  "Blend creativity with strategy",
];


export default function MissionCard() {
    return (
        <div className="relative w-full max-w-[800px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="123"
            height="137"
            viewBox="0 0 123 137"
            fill="none"
            className="absolute top-[-35px] right-[-35px] z-10 pointer-events-none"
          >
            <mask id="path-1-inside-1_26_41" fill="white">
              <path d="M87 136C87 136.552 86.5523 137 86 137H0V40H79C83.4183 40 87 43.5817 87 48V136Z" />
            </mask>
            <path
              d="M87 137H0H87M0 39H79C83.9706 39 88 43.0294 88 48H86C86 44.134 82.866 41 79 41H0V39ZM79 39C83.9706 39 88 43.0294 88 48V135C88 136.105 87.1046 137 86 137C86 137 86 136.552 86 136V48C86 44.134 82.866 41 79 41V39ZM79 41M0 137V40V137"
              fill="white"
              fillOpacity="0.4"
              mask="url(#path-1-inside-1_26_41)"
            />
            <path
              d="M104.997 61.2617C94.9 51.6181 90.1229 47.0287 87.6016 44.8555C86.3503 43.777 85.6023 43.2461 85.0029 43.0039C84.373 42.7494 83.8952 42.8223 83.4199 42.8223C82.9262 42.8223 82.4737 42.8203 81.9561 42.9854C81.4429 43.149 80.9003 43.4635 80.1582 44.0244C78.6829 45.1395 76.2627 47.3534 71.4893 51.7139L71.4883 51.7129C70.7283 52.4061 69.9881 53.0772 69.2832 53.7168C69.923 53.0123 70.5933 52.2722 71.2861 51.5127C75.6549 46.7388 77.868 44.3166 78.9814 42.8408C79.5414 42.0986 79.8553 41.5563 80.0176 41.043C80.181 40.5256 80.1777 40.0727 80.1777 39.5801C80.1777 39.1048 80.2506 38.627 79.9961 37.9971C79.7539 37.3977 79.223 36.6497 78.1445 35.3984C75.9713 32.8771 71.3819 28.1 61.7383 18.0029C59.8098 15.9845 57.9528 14.0374 56.2158 12.2158C58.0374 13.9528 59.9845 15.8098 62.0029 17.7383C72.1 27.3819 76.8771 31.9713 79.3984 34.1445C80.6497 35.223 81.3977 35.7539 81.9971 35.9961C82.627 36.2506 83.1048 36.1777 83.5801 36.1777C84.0727 36.1777 84.5256 36.181 85.043 36.0176C85.5563 35.8553 86.0986 35.5414 86.8408 34.9814C88.3166 33.8681 90.7383 31.6554 95.5117 27.2871C96.2716 26.594 97.012 25.9233 97.7168 25.2832C97.0772 25.9881 96.4061 26.7283 95.7129 27.4883L95.7139 27.4893C91.3534 32.2627 89.1395 34.6829 88.0244 36.1582C87.4635 36.9003 87.149 37.4429 86.9854 37.9561C86.8203 38.4737 86.8223 38.9262 86.8223 39.4199C86.8223 39.8952 86.7494 40.373 87.0039 41.0029C87.2461 41.6023 87.777 42.3503 88.8555 43.6016C91.0287 46.1229 95.6181 50.9 105.262 60.9971C107.191 63.0159 109.048 64.9633 110.785 66.7852C108.963 65.0479 107.016 63.1905 104.997 61.2617Z"
              stroke="#B0BAC5"
            />
          </svg>
          <div className="relative flex flex-col justify-start items-start gap-12 glass-effect rounded-tr-[150px] rounded-bl-[150px] overflow-hidden p-6 w-full h-[400px] pt-[75px] px-[100px]">
            <div className="relative inline-block font-roboto text-left flex-col gap-0 w-full">
              <h3 className="text-3xl font-normal text-slate-200/90 leading-[20px]">
                Our
              </h3>
              <div className="relative inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="324"
                  height="153"
                  viewBox="0 0 324 153"
                  fill="none"
                  className="absolute -z-10 -top-[95px] -right-[55px]"
                >
                  <path
                    opacity="0.13"
                    d="M323.088 152.674L103.159 -46.971L-109.893 -46.9711L103.159 152.674L323.088 152.674Z"
                    fill="url(#paint0_linear_5_207)"
                    fillOpacity="0.39"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_207"
                      x1="273.41"
                      y1="207.4"
                      x2="-63.3215"
                      y2="-98.2741"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.142479" stopColor="white" />
                      <stop
                        offset="0.519231"
                        stopColor="#A4A4A4"
                        stopOpacity="0.45"
                      />
                      <stop
                        offset="0.87311"
                        stopColor="#737373"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src="/assets/vision-title-asset2.svg"
                  alt="Vision"
                  width={300}
                  height={200}
                  className="w-[120px] h-[120px] absolute -top-[50px] right-[-45px] opacity-70 -z-10"
                  priority
                />
                <h1 className="text-[48px] leading-[48px] text-indigo-600">
                  Mission
                </h1>
              </div>
            </div>
            <div className="text-start text-gray-400 text-[24px] font-normal font-roboto leading-1 max-w-[500px] w-auto pl-[42px] flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/mission-point.svg"
                  alt="Mission Point 1"
                  width={32}
                  height={32}
                  className="w-5 h-5 shrink-0" 
                />
                <p>{missionPoints[0]}</p>
              </div> 
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/mission-point.svg"
                  alt="Mission Point 2"
                  width={32}
                  height={32}
                  className="w-5 h-5 shrink-0" 
                />
                <p>{missionPoints[1]}</p>
              </div> 
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/mission-point.svg"
                  alt="Mission Point 2"
                  width={32}
                  height={32}
                  className="w-5 h-5 shrink-0" 
                />
                <p>{missionPoints[2]}</p>
              </div> 
            </div>
            <Image
              src="/assets/orbit-2.svg"
              alt="Orbit"
              width={200}
              height={200}
              className="absolute w-[180px] -top-[0px] -right-[10px]"
              priority
            ></Image>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="119"
            viewBox="0 0 108 119"
            fill="none"
            className="absolute rotate-90 bottom-[-24px] left-[-14px] z-10 pointer-events-none"
          >
            <circle
              cx="19.5"
              cy="19.5"
              r="19.3"
              transform="matrix(0.926403 -0.376534 -0.376534 -0.926403 71.8702 118.814)"
              stroke="#3D2FFA"
              strokeWidth="0.4"
            />
            <path
              d="M73.8755 78.5996C65.4461 82.0258 61.4506 91.8507 64.991 100.561C68.5314 109.272 78.2482 113.523 86.6777 110.097C95.1072 106.671 99.1027 96.8463 95.5623 88.1357C92.0219 79.4251 82.305 75.1735 73.8755 78.5996Z"
              fill="url(#paint0_linear_5_196)"
              stroke="#3D2FFA"
            />
            <mask id="path-3-inside-1_5_196" fill="white">
              <path d="M87.0001 0H6.86646e-05V97H87.0001V0Z" />
            </mask>
            <path
              d="M87.0001 97H88.0001V98H87.0001V97ZM6.86646e-05 97V96H87.0001V97V98H6.86646e-05V97ZM87.0001 97H86.0001V0H87.0001H88.0001V97H87.0001Z"
              fill="white"
              fillOpacity="0.4"
              mask="url(#path-3-inside-1_5_196)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_196"
                x1="103.706"
                y1="41.3781"
                x2="62.5363"
                y2="123.028"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#534DA4" />
                <stop offset="1" stopColor="#201D3E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
    )
}