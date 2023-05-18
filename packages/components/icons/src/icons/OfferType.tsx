import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const OfferType = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4555 11.9545C13.2476 11.9545 13.6415 12.3477 14.1228 13.3168L14.2969 13.6787C14.5166 14.1366 14.6649 14.3869 14.8559 14.589C15.0215 14.7642 15.2235 14.9048 15.5517 15.083L15.8605 15.2447C15.879 15.2542 15.8993 15.2646 15.9216 15.2761C16.9226 15.7927 17.3295 16.1985 17.3295 17.0652C17.3295 19.6764 15.465 21.1328 12.6532 21.1977L12.4555 21.2C9.53188 21.2 7.57425 19.7363 7.57425 17.0652C7.57425 16.253 7.9382 15.8455 8.82132 15.3643L9.20925 15.1604C9.62153 14.9435 9.85872 14.7873 10.0489 14.5878C10.199 14.4305 10.3231 14.2435 10.4746 13.9534L10.714 13.4659C11.2313 12.3885 11.6246 11.9545 12.4555 11.9545ZM12.4555 12.723C11.9989 12.723 11.77 12.9756 11.3686 13.8116L11.2662 14.025C11.0129 14.5497 10.8303 14.8554 10.5672 15.1313C10.3396 15.3699 10.0879 15.5468 9.70862 15.7556L9.29973 15.9714C8.53629 16.3696 8.30717 16.5992 8.30717 17.0652C8.30717 19.1878 9.81135 20.3683 12.2553 20.429L12.4555 20.4314C15.0152 20.4314 16.5965 19.2465 16.5965 17.0652C16.5965 16.6208 16.3953 16.3924 15.736 16.0382L15.3744 15.8504C14.8887 15.5976 14.5964 15.4062 14.3354 15.13C14.1037 14.885 13.9356 14.6174 13.7238 14.1915L13.5442 13.8186C13.1422 12.9767 12.9136 12.723 12.4555 12.723ZM18.6707 10.3175C19.2793 10.3175 19.681 10.5871 19.8649 11.0995C19.9701 11.3928 19.9983 11.6557 20 12.2383L19.997 12.9838C19.9602 14.284 18.9615 15.3437 17.6959 15.3821C16.4728 15.3821 16.0029 14.4562 16.0054 12.8088C16.1643 11.391 17.3083 10.3212 18.6707 10.3175ZM6.32828 10.3175C7.69065 10.3212 8.83472 11.391 8.99612 12.8537C8.99612 14.4562 8.52618 15.3821 7.29242 15.382C5.99225 15.3423 4.96779 14.2071 5.00169 12.8537L5 12.0991C5.00594 11.6117 5.03768 11.3683 5.13413 11.0995C5.31799 10.5871 5.71965 10.3175 6.32828 10.3175ZM6.32755 11.0853L6.23071 11.0891C5.98835 11.1058 5.88454 11.1906 5.82012 11.3701C5.75473 11.5524 5.7335 11.7677 5.73201 12.2562L5.73552 12.9854C5.77279 13.8704 6.45584 14.5876 7.30307 14.6136C7.99639 14.6136 8.2632 14.0879 8.2657 12.8985C8.1501 11.867 7.31776 11.0888 6.32755 11.0853ZM18.6714 11.0853L18.5434 11.0907C17.6102 11.1568 16.844 11.9099 16.7358 12.8537C16.7358 14.0879 17.0026 14.6136 17.6853 14.6138C18.5817 14.5864 19.288 13.8037 19.2644 12.8537L19.267 12.2562C19.2655 11.7677 19.2443 11.5524 19.1789 11.3701C19.1064 11.1681 18.9841 11.086 18.6714 11.0853ZM10.0882 4.19995C11.3769 4.19995 12.3529 5.73369 12.3529 7.56614C12.3529 9.40367 11.3784 10.9323 10.0882 10.9323C8.65649 10.9323 7.83077 10.1849 7.83077 8.48838C7.83077 6.90532 9.32988 4.19995 10.0882 4.19995ZM14.9108 4.19995C15.6691 4.19995 17.1682 6.90532 17.1682 8.48838C17.1682 10.1849 16.3425 10.9323 14.9108 10.9323C13.6206 10.9323 12.6461 9.40367 12.6461 7.56614C12.6461 5.73369 13.6221 4.19995 14.9108 4.19995ZM10.0882 4.96849C9.84111 4.96849 8.5637 7.27377 8.5637 8.48838C8.5637 9.73326 9.0393 10.1638 10.0882 10.1638C10.8967 10.1638 11.62 9.02919 11.62 7.56614C11.62 6.10806 10.8948 4.96849 10.0882 4.96849ZM14.9108 4.96849C14.1042 4.96849 13.379 6.10806 13.379 7.56614C13.379 9.02919 14.1023 10.1638 14.9108 10.1638C15.9597 10.1638 16.4353 9.73326 16.4353 8.48838C16.4353 7.27377 15.1579 4.96849 14.9108 4.96849Z"/>',
      }}
    />
  )
)

OfferType.displayName = 'OfferType'

export const tags = ['OfferType', '']
