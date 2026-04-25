import Image from "next/image";

export default function Vision() {
  return (
    <section id="vision">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="104"
            viewBox="0 0 96 104"
            fill="none"
            className="absolute top-0 left-[-10px] z-10 pointer-events-none"
          >
            <mask id="path-1-inside-1_5_201" fill="white">
              <path d="M9 103C9 103.552 9.44772 104 10 104H96V7H17C12.5817 7 9 10.5817 9 15V103Z" />
            </mask>
            <path
              d="M9 104H96H9M96 6H17C12.0294 6 8 10.0294 8 15H10C10 11.134 13.134 8 17 8H96V6ZM17 6C12.0294 6 8 10.0294 8 15V102C8 103.105 8.89543 104 10 104C10 104 10 103.552 10 103V15C10 11.134 13.134 8 17 8V6ZM17 8M96 104V7V104"
              fill="white"
              fill-opacity="0.4"
              mask="url(#path-1-inside-1_5_201)"
            />
            <path
              d="M11.9082 0.944336C11.7909 1.30632 11.635 1.81049 11.4463 2.44336C11.1076 3.58039 10.7436 4.73878 10.6406 4.99902L10.6396 5.00195C9.75829 7.19781 8.15392 8.99202 6.08301 10.1172L5.66309 10.333C4.87736 10.7155 4.65641 10.7901 2.2168 11.5107C1.63014 11.6846 1.22019 11.8092 0.932617 11.9033C0.990458 11.922 1.0528 11.9435 1.12109 11.9648L2.36426 12.3389H2.36523C4.30117 12.9188 4.90334 13.1159 5.54785 13.4199L5.83008 13.5576C6.66189 13.9758 7.29088 14.4029 7.97852 15.0293L8.27734 15.3105C9.28695 16.2866 10.0687 17.4314 10.5947 18.7021L10.6963 18.958C10.7929 19.2103 11.1417 20.3323 11.4707 21.4355C11.6679 22.0969 11.8073 22.5521 11.9102 22.8672C12.0169 22.5373 12.1621 22.0675 12.3574 21.4111L12.3584 21.4092C12.7007 20.2714 13.0454 19.1547 13.123 18.9551C14.2171 16.1064 16.5287 13.9032 19.4258 12.958C19.7066 12.8618 20.7299 12.5529 21.707 12.2607H21.709C22.2408 12.1036 22.6181 11.9887 22.8877 11.9023C22.6139 11.8133 22.2288 11.6959 21.6846 11.5342C19.5833 10.9132 19.0563 10.753 18.46 10.4824L18.1953 10.3584C17.0715 9.81447 16.1747 9.15914 15.291 8.25L15.29 8.24902C14.4955 7.42881 14.0172 6.74211 13.4883 5.68945V5.68848C13.1426 4.99713 12.9791 4.5075 12.2939 2.19922V2.19824C12.153 1.72187 12.0175 1.28307 11.9082 0.944336Z"
              fill="#D9D9D9"
              stroke="#B0BAC5"
            />
          </svg>
          <div className="relative flex flex-col justify-start items-end gap-12 glass-effect rounded-tl-[150px] rounded-br-[150px] overflow-hidden p-6 max-w-[800px] mx-auto h-[400px] pt-[75px] px-[100px]">
            <div className="relative inline-block font-roboto text-right flex-col gap-0 w-full">
              <h3 className="text-3xl font-normal text-indigo-600 leading-[0px]">
                Our
              </h3>
              <div className="relative inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="340"
                  height="151"
                  viewBox="0 0 340 151"
                  fill="none"
                  className="absolute -z-10 -top-20 -right-[120px]"
                >
                  <path
                    opacity="0.26"
                    d="M0 150.453L209.698 -39.9036L412.838 -39.9036L209.698 150.453L0 150.453Z"
                    fill="url(#paint0_linear_5_171)"
                    fillOpacity="0.39"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_171"
                      x1="47.3673"
                      y1="202.633"
                      x2="368.434"
                      y2="-88.82"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.142479" stopColor="#3D2FFA" />
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
                  src="/assets/vision-title-asset.svg"
                  alt="Vision"
                  width={300}
                  height={200}
                  className="w-14 h-16 absolute -top-3 right-20 opacity-70 -z-10"
                />
                <h1 className="text-[48px] leading-[48px] text-slate-200/90">
                  Vision
                </h1>
              </div>
            </div>
            <p className="text-right text-gray-400 text-[24px] font-normal font-roboto leading-1 max-w-[500px] w-auto pr-[32px]">
              To guide brands in discovering their identity through explorative
              and forward-thinking design.
            </p>
            <Image
              src="/assets/orbit-1.svg"
              alt="Orbit"
              width={200}
              height={200}
              className="absolute w-[180px] -top-[-110px] -left-[10px]"
            ></Image>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="119"
            viewBox="0 0 108 119"
            fill="none"
            className="absolute bottom-[-14px] right-[-20px] z-10 pointer-events-none"
          >
            <circle
              cx="19.5"
              cy="19.5"
              r="19.3"
              transform="matrix(0.926403 -0.376534 -0.376534 -0.926403 71.8702 118.814)"
              stroke="#3D2FFA"
              stroke-width="0.4"
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
              fill-opacity="0.4"
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
                <stop stop-color="#534DA4" />
                <stop offset="1" stop-color="#201D3E" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
