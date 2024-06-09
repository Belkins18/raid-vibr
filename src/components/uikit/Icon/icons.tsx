import { ReactElement } from 'react'

import { EIconGroup, EIconType } from './types'

type TIconContent = {
  type?: EIconType
  group?: EIconGroup
  jsx: ReactElement
}

export type TIconContents = Record<string, TIconContent>

export const icons: TIconContents = {
  back: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M22.4786 7.82397C22.1927 7.7567 21.8899 7.71712 21.5728 7.71032C18.7447 7.65209 19.8156 7.68041 16.9889 7.64249C15.5215 7.62281 14.0542 7.60313 12.4882 7.58212C12.4882 5.63478 12.5076 3.76382 12.47 1.89463C12.4635 1.56724 12.2893 1.07141 12.0476 0.9616C11.8123 0.854417 11.3172 1.05456 11.0637 1.26429C7.55466 4.182 4.06768 7.12283 0.576799 10.0585C-0.141911 10.6629 -0.140611 10.937 0.583298 11.5658C2.8395 13.5256 5.09441 15.4854 7.35191 17.4453C8.63467 18.5586 9.90833 19.6819 11.2158 20.7664C11.4237 20.9391 11.85 21.0641 12.0606 20.9705C12.2763 20.8745 12.4167 20.497 12.4726 20.2187C12.5414 19.8745 12.4895 19.5059 12.4895 19.1482C12.4895 17.5738 12.4895 15.9995 12.4895 14.3553L13.3082 14.3663C17.28 14.4196 17.3528 14.4409 21.3245 14.4535C21.7027 14.4548 22.0978 14.4132 22.4799 14.3295V7.82652L22.4786 7.82397Z"
          fill="currenColor"
        />
      </>
    ),
  },
  disconnect: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <g clipPath="url(#clip0_97_906)">
          <path
            d="M0.959961 11.6669C0.959961 9.30105 0.956478 6.93402 0.959961 4.56823C0.965765 2.19902 2.5166 0.703851 4.93107 0.735093C7.27241 0.765355 9.6126 0.791006 11.9539 0.831603C13.037 0.850726 13.6708 1.83083 13.1623 2.67847C12.8884 3.13533 12.4577 3.2754 11.9342 3.26608C9.6509 3.22627 7.36876 3.20024 5.08546 3.17076C3.82715 3.15388 3.42899 3.54706 3.42899 4.79774C3.42899 9.43524 3.42899 14.0727 3.42899 18.7102C3.42899 19.838 3.86313 20.2803 4.99608 20.2966C7.27938 20.3296 9.56152 20.3567 11.8448 20.3908C12.8025 20.4048 13.3295 20.8552 13.3202 21.6372C13.3109 22.4031 12.7653 22.8356 11.8123 22.8228C9.47098 22.7926 7.1308 22.7646 4.78945 22.7286C2.56884 22.6931 0.97389 21.1189 0.963443 18.9367C0.950674 16.5133 0.961122 14.089 0.959961 11.6657V11.6669Z"
            fill="currentColor"
          />
          <path
            d="M18.0406 10.6799C16.9646 9.60542 16.0127 8.67273 15.0817 7.72079C14.4932 7.11799 14.6499 6.26793 15.3812 5.98833C15.827 5.81745 16.2182 5.93639 16.5478 6.26468C18.1915 7.90262 19.8375 9.53945 21.4685 11.1899C21.9444 11.6717 21.9467 12.2494 21.4708 12.7185C19.8677 14.2991 18.2531 15.8681 16.6302 17.43C16.1729 17.8706 15.5368 17.8575 15.1235 17.45C14.6824 17.0146 14.6882 16.4094 15.1758 15.929C16.0812 15.035 17.0029 14.1561 18.0174 13.174C17.6819 13.1535 17.4811 13.1335 17.2803 13.1308C14.4561 13.0907 11.633 13.0551 8.80875 13.0126C8.5406 13.009 8.26317 12.9938 8.00547 12.9226C7.48427 12.7789 7.13603 12.2804 7.14067 11.7545C7.14531 11.224 7.49588 10.752 8.02404 10.6236C8.26317 10.5659 8.52087 10.5568 8.76928 10.5601C11.5935 10.5934 14.4166 10.6324 17.2408 10.6703C17.4475 10.6731 17.6541 10.6758 18.0395 10.681L18.0406 10.6799Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_97_906">
            <rect
              width="21"
              height="22"
              fill="white"
              transform="matrix(0.993759 0.0133314 0 1 0.957031 0.679565)"
            />
          </clipPath>
        </defs>
      </>
    ),
  },

  bscScan: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M25.2228 57.583C25.2229 56.9056 25.3568 56.2348 25.6169 55.6093C25.877 54.9837 26.258 54.4157 26.7382 53.9378C27.2184 53.4599 27.7883 53.0816 28.4151 52.8246C29.0419 52.5676 29.7133 52.4369 30.3908 52.44L38.9588 52.468C40.3249 52.468 41.6351 53.0107 42.6011 53.9767C43.5671 54.9427 44.1098 56.2529 44.1098 57.619V90.0191C45.0748 89.7331 46.3098 89.428 47.6688 89.108C48.6103 88.8865 49.4494 88.3535 50.05 87.5953C50.6506 86.8371 50.9776 85.8983 50.9778 84.931V44.744C50.9778 43.3778 51.5204 42.0675 52.4864 41.1014C53.4524 40.1352 54.7626 39.5923 56.1288 39.592H64.7228C66.089 39.5923 67.3992 40.1352 68.3651 41.1014C69.3311 42.0675 69.8738 43.3778 69.8738 44.744V82.044C69.8738 82.044 72.0238 81.174 74.1168 80.29C74.8945 79.9611 75.5582 79.4104 76.025 78.7067C76.4918 78.003 76.7411 77.1775 76.7418 76.333V31.866C76.7418 30.5001 77.2843 29.1901 78.2501 28.2241C79.2159 27.2581 80.5258 26.7153 81.8918 26.715H90.4768C91.842 26.7164 93.1509 27.2596 94.1158 28.2255C95.0808 29.1914 95.6228 30.5008 95.6228 31.866V68.483C103.066 63.089 110.609 56.601 116.595 48.8C117.463 47.6677 118.038 46.338 118.268 44.9295C118.497 43.521 118.375 42.0776 117.911 40.728C115.14 32.7562 110.735 25.4505 104.979 19.2786C99.2225 13.1067 92.241 8.20438 84.4813 4.88543C76.7216 1.56649 68.3544 -0.0960273 59.9153 0.00428347C51.4762 0.104594 43.1509 1.96552 35.4723 5.46797C27.7936 8.97042 20.9307 14.0373 15.3226 20.3443C9.71457 26.6513 5.48488 34.0596 2.90423 42.0951C0.323578 50.1305 -0.551199 58.6163 0.33587 67.0093C1.22294 75.4022 3.85232 83.5176 8.05576 90.836C8.7881 92.0985 9.86553 93.1258 11.1615 93.7972C12.4574 94.4685 13.918 94.7561 15.3718 94.626C16.9958 94.483 19.0178 94.281 21.4218 93.999C22.468 93.88 23.434 93.3803 24.1356 92.5951C24.8373 91.8099 25.2257 90.7941 25.2268 89.741V57.583"
          fill="currentColor"
        />
        <path
          d="M25.0391 109.544C34.0883 116.127 44.7823 120.079 55.9379 120.961C67.0934 121.844 78.2758 119.623 88.2476 114.545C98.2195 109.467 106.592 101.729 112.439 92.1878C118.286 82.6465 121.38 71.6735 121.378 60.4831C121.378 59.0831 121.313 57.7051 121.22 56.3311C99.057 89.3861 58.1351 104.839 25.0391 109.544Z"
          fill="#F0B90B"
        />
      </>
    ),
  },
  wallet: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M21.7422 11.639C20.6251 11.639 19.5817 11.63 18.5383 11.6408C16.8288 11.6597 15.4179 12.901 15.1675 14.5909C14.9336 16.1646 15.9654 17.7626 17.5569 18.2247C17.9696 18.3446 18.4206 18.3635 18.8553 18.3734C19.792 18.395 20.7288 18.3797 21.7375 18.3797C21.7371 18.8598 21.7366 19.3021 21.7362 19.7453C21.7357 20.2993 21.7497 20.8542 21.7282 21.4082C21.6861 22.5297 20.9382 23.2314 19.7982 23.2332C17.3123 23.2359 14.8265 23.2332 12.3406 23.2332C9.0665 23.2332 5.79239 23.2332 2.51829 23.2332C1.22432 23.2332 0.490562 22.508 0.491802 21.2316C0.495851 17.0663 0.499899 12.901 0.503948 8.73572C0.505139 7.50974 1.24214 6.77108 2.47324 6.77018C8.24871 6.76838 14.0242 6.76838 19.7996 6.77018C20.9761 6.77018 21.7181 7.4692 21.7415 8.61952C21.7615 9.6059 21.7442 10.5932 21.7432 11.639H21.7422Z"
          fill="currentColor"
        />
        <path
          d="M13.0523 1.42434C12.5648 1.46848 12.1164 1.45587 11.6963 1.55766C10.7638 1.78286 10.1189 2.53503 10.0469 3.47636C10.0007 4.0862 10.0375 4.70235 10.0368 5.37074C9.8746 5.39146 9.75246 5.42119 9.62944 5.42119C7.73496 5.42389 5.83958 5.41668 3.94509 5.4302C3.66351 5.432 3.53512 5.33921 3.46611 5.08249C3.40528 4.85188 3.30253 4.63299 3.22347 4.40779C2.98902 3.73759 3.18716 3.32323 3.87174 3.07551C6.35758 2.17741 8.84433 1.28201 11.3311 0.388421C12.3092 0.0371097 12.6544 0.209162 12.9842 1.20274C13.0069 1.2712 13.0269 1.34147 13.0523 1.42434Z"
          fill="currentColor"
        />
        <path
          d="M20.7352 17.0336C20.0081 17.0336 19.2809 17.0408 18.5546 17.0318C17.4202 17.0165 16.5253 16.1427 16.5099 15.051C16.4955 13.9538 17.3557 13.0215 18.4857 12.9962C19.9993 12.9629 21.5147 12.9809 23.0282 12.989C23.5221 12.9917 23.7825 13.2584 23.7875 13.7448C23.7958 14.5825 23.7931 15.4212 23.785 16.2598C23.78 16.7814 23.531 17.0291 23.0052 17.0336C22.2479 17.0408 21.4907 17.0354 20.7334 17.0354L20.7352 17.0336ZM19.2373 14.9951C19.2258 14.6438 18.9154 14.3411 18.5627 14.3384C18.1937 14.3357 17.869 14.6645 17.8786 15.032C17.8883 15.4041 18.217 15.6995 18.5988 15.6788C18.9578 15.659 19.2488 15.3473 19.2382 14.996L19.2373 14.9951Z"
          fill="currentColor"
        />
        <path
          d="M11.3884 5.40167C11.389 4.78372 11.3677 4.21532 11.3965 3.64871C11.4225 3.13976 11.7718 2.81998 12.2875 2.81727C14.3342 2.80827 16.3809 2.80917 18.4275 2.81727C18.9187 2.81908 19.3002 3.13616 19.3262 3.59647C19.3593 4.18919 19.3332 4.78552 19.3326 5.40167H11.3875H11.3884Z"
          fill="currentColor"
        />
      </>
    ),
  },
  copy: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M4.31265 18.1478C4.17141 19.7846 5.12372 20.869 6.65959 20.8716C9.87596 20.8776 13.0932 20.8776 16.3095 20.8716C17.7245 20.869 18.6649 19.9334 18.6692 18.495C18.681 14.6294 18.681 10.763 18.6692 6.89744C18.6649 5.39654 17.5985 4.41476 16.0753 4.53192C16.0753 4.68842 16.0753 4.85091 16.0753 5.01426C16.0753 8.29742 16.0753 11.5806 16.0753 14.8637C16.0753 16.8581 14.8075 18.1452 12.8386 18.1478C10.1694 18.1512 7.50111 18.1478 4.83194 18.1486C4.66617 18.1486 4.50041 18.1486 4.3118 18.1486L4.31265 18.1478Z"
          fill="currentColor"
        />
        <path
          d="M0.687511 14.9657C0.690894 16.3452 1.57216 17.2397 2.93296 17.244C6.26097 17.256 9.58898 17.2551 12.9161 17.244C14.2998 17.2397 15.1616 16.3358 15.1633 14.9307C15.1658 12.9697 15.1633 11.0095 15.1633 9.0485C15.1633 7.0875 15.1658 5.12735 15.1633 3.16635C15.1608 1.76038 14.2964 0.879513 12.9035 0.877803C9.58983 0.872671 6.2762 0.873527 2.96172 0.877803C1.56878 0.881223 0.690048 1.75012 0.686665 3.15951C0.677362 7.0952 0.677362 11.03 0.686665 14.9657L0.687511 14.9657ZM7.29532 7.70753C7.35875 7.67161 7.47715 7.63056 7.51014 7.66049C7.72919 7.85634 7.93217 8.07099 8.15967 8.29934C8.07256 8.34381 8.03619 8.36775 7.9956 8.38144C7.16338 8.67135 6.92657 9.60525 7.53382 10.2424C7.99898 10.7307 8.47513 11.2071 8.95552 11.68C9.40545 12.123 10.1057 12.1204 10.5218 11.6868C10.9464 11.2438 10.9337 10.5648 10.4905 10.103C10.3087 9.91398 10.1201 9.73182 9.93996 9.54196C9.89683 9.49663 9.84355 9.42822 9.84862 9.37605C9.88245 9.03653 9.93066 8.69872 9.97633 8.34295C9.99917 8.35236 10.0245 8.35493 10.0389 8.36946C10.4652 8.80049 10.9193 9.20843 11.3084 9.6711C11.9554 10.4408 11.8623 11.6278 11.1426 12.3402C10.4119 13.0637 9.23038 13.1339 8.48275 12.4497C7.88734 11.9049 7.31308 11.3302 6.77772 10.7256C5.96242 9.80451 6.23475 8.31302 7.29617 7.70753L7.29532 7.70753ZM4.72679 5.76449C5.45329 5.06236 6.62549 5.00335 7.37228 5.68239C7.96938 6.22545 8.54448 6.79929 9.0773 7.40564C9.89683 8.33953 9.61689 9.84471 8.54871 10.4382C8.48782 10.4724 8.37872 10.5186 8.34996 10.4938C8.12669 10.2928 7.91779 10.0756 7.68098 9.84043C7.7757 9.79681 7.81291 9.77714 7.85266 9.76261C8.71871 9.44105 8.92 8.51399 8.26623 7.8512C7.81968 7.39794 7.37313 6.94468 6.92319 6.49484C6.4538 6.02533 5.75183 6.00908 5.32389 6.45208C4.88833 6.90277 4.9137 7.5878 5.38309 8.06757C5.52433 8.2121 5.66049 8.36262 5.81273 8.49518C5.96242 8.62432 6.02332 8.74918 5.9675 8.96127C5.91337 9.16738 5.92944 9.39315 5.91506 9.61038C5.91083 9.6711 5.90745 9.73182 5.90322 9.80366C5.84994 9.78741 5.82288 9.78741 5.80934 9.77372C5.37463 9.32987 4.90524 8.91509 4.5162 8.43361C3.8802 7.64595 3.99691 6.47089 4.72594 5.7662L4.72679 5.76449Z"
          fill="currentColor"
        />
      </>
    ),
  },
  // viewBox="0 0 41 39"
  socialX: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <g>
          <path
            d="M40.875 38.5034C40.5138 38.5034 40.3125 38.5034 40.1095 38.5034C36.6304 38.5034 33.1497 38.4916 29.6706 38.5151C29.1544 38.5181 28.8603 38.3667 28.5759 37.983C25.2997 33.567 22.0044 29.1612 18.7139 24.7541C18.5349 24.513 18.3527 24.2734 18.1034 23.9426C17.111 24.9951 16.1441 26.0124 15.1884 27.0356C11.7781 30.6857 8.36608 34.3343 4.96849 37.9947C4.63288 38.3564 4.29088 38.5416 3.75232 38.5137C2.88454 38.4696 2.01197 38.5019 0.949219 38.5019C6.20383 32.879 11.3498 27.3722 16.5325 21.8287C11.3578 14.9004 6.20703 7.99998 0.985975 1.00699C1.28323 0.984935 1.49897 0.955534 1.71472 0.955534C5.19382 0.952594 8.67452 0.965825 12.1536 0.940834C12.6714 0.937894 12.9639 1.09372 13.2467 1.47593C16.3743 5.69054 19.5178 9.89339 22.6597 14.0992C22.8051 14.2947 22.9649 14.4814 23.1631 14.7298C24.889 12.8849 26.567 11.0944 28.2419 9.30244C30.6838 6.69017 33.1305 4.08232 35.5597 1.46123C35.8953 1.0996 36.2373 0.914373 36.7758 0.942304C37.642 0.986405 38.5146 0.954064 39.5725 0.954064C34.556 6.32266 29.6514 11.5707 24.7132 16.8555C30.0813 24.0455 35.435 31.2178 40.875 38.5048V38.5034ZM5.78672 3.41051C6.02964 3.75009 6.16548 3.95442 6.3141 4.14994C9.85393 8.81291 13.3954 13.4759 16.9384 18.1374C21.362 23.9602 25.784 29.7845 30.2172 35.6015C30.385 35.822 30.6582 36.1263 30.89 36.1337C32.5504 36.1792 34.214 36.1587 35.9959 36.1587C35.7882 35.8602 35.6587 35.6574 35.5117 35.4648C33.8401 33.2641 32.1637 31.065 30.492 28.8643C24.1986 20.5806 17.91 12.294 11.6055 4.01616C11.4137 3.76479 11.0781 3.44873 10.7968 3.43844C9.18272 3.38405 7.56383 3.41198 5.78832 3.41198L5.78672 3.41051Z"
            fill="currentColor"
          />
        </g>
      </>
    ),
  },
  // viewBox="0 0 36 29"
  socialTelegram: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <g>
          <path
            d="M19.4296 22.4296C18.0482 23.7263 16.6999 25.0214 15.3091 26.2741C15.0438 26.5132 14.6112 26.5843 14.256 26.7326C14.1471 26.3997 13.9292 26.0593 13.9482 25.734C14.0729 23.5795 14.2339 21.425 14.4281 19.275C14.4502 19.0239 14.7012 18.7531 14.9159 18.5624C19.4596 14.5394 24.0143 10.5284 28.5612 6.5084C28.7759 6.31928 28.9353 6.07266 29.1201 5.85176C29.049 5.77914 28.978 5.70651 28.9085 5.63389C28.6527 5.76855 28.3907 5.89413 28.1412 6.03937C22.1309 9.55708 16.1174 13.0703 10.1197 16.6076C9.62236 16.9011 9.21662 16.9359 8.67195 16.7499C6.33223 15.9525 3.97829 15.1915 1.62278 14.4395C1.01812 14.2474 0.566593 13.9614 0.558699 13.3063C0.550806 12.6829 0.986543 12.3849 1.54069 12.1821C12.0426 8.3361 22.5429 4.48856 33.0417 0.637988C33.8169 0.353546 34.5447 0.377754 35.1714 0.920918C35.7903 1.45803 35.8898 2.12526 35.7066 2.91353C33.8342 11.008 31.9871 19.1086 30.1305 27.2077C29.7958 28.6662 28.6448 29.0686 27.3834 28.1593C24.8921 26.3634 22.4072 24.5584 19.919 22.7595C19.777 22.6566 19.627 22.5628 19.4296 22.4296Z"
            fill="currentColor"
          />
        </g>
      </>
    ),
  },
  // viewBox="0 0 41 31"
  socialDiscord: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M27.9367 27.6559C29.1302 27.0706 30.1688 26.5611 31.2669 26.0216C30.868 25.3937 30.4942 25.2802 29.8716 25.5483C23.5805 28.2632 17.2721 28.2333 10.981 25.5499C10.3913 25.2991 10.0049 25.3669 9.57789 25.9995C10.665 26.5437 11.7365 27.0785 12.9237 27.6732C12.2542 28.7412 11.6223 29.784 10.9419 30.7951C10.8449 30.9387 10.4804 31.0255 10.2943 30.9655C6.93285 29.8849 3.81856 28.3027 0.970183 26.2014C0.79343 26.0705 0.649525 25.7897 0.629191 25.5641C-0.124746 17.4557 1.91495 10.0682 6.34629 3.31176C6.49175 3.08933 6.74515 2.87164 6.99229 2.79118C9.35265 2.01978 11.724 1.27677 14.0921 0.525879C14.6318 0.355508 15.0119 0.525879 15.1605 1.0859C15.4905 2.33686 16.2194 2.53247 17.4848 2.44413C19.8014 2.28165 22.1414 2.45991 24.4721 2.53563C24.885 2.54825 25.0633 2.42362 25.2323 2.07026C26.0503 0.355508 26.08 0.29083 27.8945 0.806676C29.8607 1.36511 31.7924 2.04975 33.7195 2.73282C34.0746 2.85902 34.4187 3.18714 34.633 3.51211C38.6764 9.64389 40.6316 16.3846 40.3798 23.7594C40.3287 25.2549 39.6765 26.4112 38.423 27.2284C36.0345 28.7775 33.4911 29.9969 30.7961 30.9056C30.2408 31.0933 29.942 30.9986 29.6589 30.5049C29.1161 29.5584 28.5327 28.6355 27.9367 27.6559ZM27.0123 13.056C26.3256 13.3763 25.5545 13.5861 24.9679 14.0388C22.8844 15.6479 23.0533 19.2951 25.2416 20.7574C26.3506 21.4989 27.5457 21.5667 28.6938 20.8978C30.1328 20.0586 30.7178 18.6846 30.6506 17.0645C30.5599 14.867 29.0082 13.2501 27.0107 13.056H27.0123ZM13.7809 13.2422C12.9033 13.2485 12.0603 13.6129 11.4127 14.2691C9.92514 15.7772 9.84067 18.4732 11.2297 20.0807C12.2401 21.248 13.7011 21.6408 15.0291 21.0998C16.4978 20.5003 17.4786 18.8471 17.3941 17.1087C17.2878 14.8812 15.7455 13.2327 13.7809 13.2453V13.2422Z"
          fill="currentColor"
        />
      </>
    ),
  },
  //  viewBox="0 0 44 29"
  socialYoutube: {
    group: EIconGroup.icon,
    jsx: (
      <>
        <path
          d="M22.0293 28.8208C16.9807 28.5582 11.9762 28.3708 6.98573 28.0111C3.60766 27.7668 1.94947 26.3079 1.45254 23.1091C0.559123 17.3672 0.520356 11.5985 1.52831 5.86002C2.0411 2.9322 3.87023 1.45992 7.03331 1.18722C14.6899 0.523022 22.3624 0.548118 30.0366 0.804093C32.1723 0.87436 34.3045 1.02661 36.435 1.18053C40.1479 1.44821 41.9717 2.98741 42.4704 6.49745C43.2757 12.1674 43.2704 17.849 42.3259 23.5072C41.8836 26.159 40.0844 27.8086 37.2509 27.9994C32.1706 28.3407 27.0814 28.5565 22.0293 28.8225V28.8208ZM17.7719 8.6724V20.5978C21.446 18.5919 25.0215 16.6394 28.692 14.6351C25.0127 12.6258 21.4531 10.6817 17.7719 8.6724Z"
          fill="currentColor"
        />
      </>
    ),
  },
}