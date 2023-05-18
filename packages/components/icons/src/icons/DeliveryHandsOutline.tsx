import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const DeliveryHandsOutline = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1417 2.19971H10.4167C9.39167 2.19971 8.55833 3.04323 8.55833 4.08077V13.9247C8.55833 14.0681 8.575 14.2115 8.60833 14.338C7.80833 13.6464 6.8 13.2415 5.74167 13.2415H2.975C2.43333 13.2415 2 13.6801 2 14.2284C2 14.7767 2.43333 15.2153 2.975 15.2153H5.73333C6.39167 15.2153 7.01667 15.4768 7.48333 15.9492C7.70833 16.1769 7.88333 16.4384 8 16.7337H5.04167C4.5 16.7337 4.06667 17.1723 4.06667 17.7206C4.06667 18.2689 4.5 18.7075 5.04167 18.7075H11.9417C12.4167 18.7075 12.8667 18.9015 13.2 19.2389C13.4667 19.5089 13.6417 19.8547 13.7 20.2259H2.975C2.43333 20.2259 2 20.6645 2 21.2128C2 21.7611 2.43333 22.1997 2.975 22.1997H14.0083C14.45 22.1997 14.875 22.0226 15.1833 21.702C15.4917 21.3815 15.675 20.9597 15.675 20.5127C15.675 19.5089 15.2833 18.5472 14.5833 17.8387C13.8833 17.1301 12.9333 16.7337 11.9417 16.7337H10.0417C9.95 16.3372 9.80833 15.9661 9.61667 15.6118C9.85833 15.7299 10.125 15.7973 10.4167 15.7973H20.1417C21.1667 15.7973 22 14.9538 22 13.9163V4.08077C22 3.04323 21.1667 2.19971 20.1417 2.19971ZM14.4833 4.17356H16.0667V7.1259H14.4833V4.17356ZM20.05 13.8404H10.5V4.17356H12.525V7.66576C12.525 8.04534 12.675 8.40806 12.9417 8.67799C13.2083 8.94791 13.5667 9.09975 13.9417 9.09975H16.5917C16.9667 9.09975 17.325 8.94791 17.5917 8.67799C17.8583 8.40806 18.0083 8.04534 18.0083 7.66576V4.17356H20.0417V13.8404H20.05Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 11.5966C16.0583 11.5966 15.625 12.0352 15.625 12.5835C15.625 13.1318 16.0583 13.5704 16.6 13.5704H18.8083C19.35 13.5704 19.7833 13.1318 19.7833 12.5835C19.7833 12.0352 19.35 11.5966 18.8083 11.5966H16.6Z"/>',
      }}
    />
  )
)

DeliveryHandsOutline.displayName = 'DeliveryHandsOutline'

export const tags = ['DeliveryHandsOutline', '']
