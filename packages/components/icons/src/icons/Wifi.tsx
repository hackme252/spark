import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Wifi = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 16.7564C12.1336 16.7564 11.8347 16.9551 11.8347 17.2C11.8347 17.4442 12.1336 17.6435 12.5 17.6435C12.8664 17.6435 13.1653 17.4442 13.1653 17.2C13.1653 16.9551 12.8664 16.7564 12.5 16.7564ZM12.5 18.2C11.6728 18.2 11 17.7514 11 17.2C11 16.6485 11.6728 16.2 12.5 16.2C13.3272 16.2 14 16.6485 14 17.2C14 17.7514 13.3272 18.2 12.5 18.2Z"/><mask id="mask0_1508_5126" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="11" y="16" width="3" height="3"><path d="M11 17.1997C11 17.751 11.6728 18.2 12.5 18.2C13.3272 18.2 14 17.751 14 17.1997C14 16.6484 13.3272 16.2 12.5 16.2C11.6728 16.2 11 16.6484 11 17.1997ZM11.8347 17.1997C11.8347 16.9549 12.1327 16.7563 12.5 16.7563C12.8673 16.7563 13.1653 16.9549 13.1653 17.1997C13.1653 17.4445 12.8673 17.6436 12.5 17.6436C12.1327 17.6436 11.8347 17.4445 11.8347 17.1997Z"/></mask><g mask="url(#mask0_1508_5126)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7387 17.7071H13.2598V16.6928H11.7387V17.7071ZM11 18.2H14V16.2H11V18.2Z"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M14.655 14.2C14.5701 14.2 14.4859 14.1651 14.4197 14.0929C13.7585 13.3835 12.8966 12.9927 11.9918 12.9927C11.0947 12.9927 10.2383 13.3771 9.5792 14.0771C9.43911 14.2245 9.22103 14.215 9.09129 14.0549C8.96224 13.894 8.97121 13.6435 9.11061 13.4944C9.89734 12.6597 10.9208 12.2 11.9918 12.2C13.0726 12.2 14.1015 12.6661 14.8903 13.5143C15.0297 13.6633 15.0373 13.9146 14.9069 14.0739C14.8393 14.1579 14.7468 14.2 14.655 14.2Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6365 12.2C17.5419 12.2 17.4473 12.1616 17.376 12.0864C16.0813 10.7097 14.3472 9.95221 12.4916 9.95221C10.6455 9.95221 8.91651 10.7037 7.62321 12.0691C7.48282 12.218 7.25297 12.2203 7.10894 12.0751C6.96565 11.9299 6.96347 11.6914 7.10385 11.5432C8.53463 10.0319 10.4477 9.19995 12.4916 9.19995C14.545 9.19995 16.4646 10.0387 17.8969 11.5613C18.0372 11.7102 18.0336 11.9487 17.8903 12.0931C17.819 12.1646 17.7274 12.2 17.6365 12.2Z"/><mask id="mask1_1508_5126" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="6" width="15" height="5"><path d="M5 6.19995H20V10.2H5V6.19995Z"/></mask><g mask="url(#mask1_1508_5126)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6432 10.2C19.5346 10.2 19.4275 10.154 19.3575 10.0668C17.7196 8.03284 15.2175 6.86573 12.4932 6.86573C9.77745 6.86573 7.2803 8.02618 5.64173 10.0502C5.52315 10.1966 5.29887 10.2253 5.14173 10.1154C4.98458 10.0049 4.95315 9.79582 5.07244 9.64869C6.84673 7.45694 9.55173 6.19995 12.4932 6.19995C15.4446 6.19995 18.1546 7.4636 19.9282 9.66733C20.0468 9.81447 20.0153 10.0229 19.8575 10.1334C19.7925 10.178 19.7175 10.2 19.6432 10.2Z"/></g>',
      }}
    />
  )
)

Wifi.displayName = 'Wifi'

export const tags = ['Wifi', '']
