import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Sun = React.forwardRef(
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
          '<path d="M11.9995 1.66632C11.4328 1.66632 10.9734 2.12574 10.9734 2.69247V4.07306C10.9734 4.63979 11.4328 5.09921 11.9995 5.09921 12.5662 5.09921 13.0256 4.63979 13.0256 4.07306V2.69247C13.0256 2.12574 12.5662 1.66632 11.9995 1.66632ZM6.37531 4.59005C5.97459 4.18931 5.32489 4.18931 4.92416 4.59005 4.52344 4.99078 4.52344 5.64051 4.92416 6.04124L5.90435 7.02146C6.30507 7.4222 6.95477 7.4222 7.3555 7.02146 7.75622 6.62073 7.75622 5.97101 7.3555 5.57027L6.37531 4.59005ZM19.0751 4.59005C18.6744 4.18931 18.0247 4.18931 17.6239 4.59005L16.6438 5.57027C16.243 5.97101 16.243 6.62073 16.6438 7.02146 17.0445 7.4222 17.6942 7.4222 18.0949 7.02146L19.0751 6.04124C19.4758 5.64051 19.4758 4.99078 19.0751 4.59005Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 6.15324C8.9557 6.15324 6.48749 8.62152 6.48749 11.6663C6.48749 14.7111 8.9557 17.1794 12.0004 17.1794C15.0451 17.1794 17.5133 14.7111 17.5133 11.6663C17.5133 8.62152 15.0451 6.15324 12.0004 6.15324ZM8.53972 11.6663C8.53972 9.75498 10.0891 8.20553 12.0004 8.20553C13.9117 8.20553 15.461 9.75498 15.461 11.6663C15.461 13.5776 13.9117 15.1271 12.0004 15.1271C10.0891 15.1271 8.53972 13.5776 8.53972 11.6663Z"/><path d="M19.5934 10.6402C19.0267 10.6402 18.5673 11.0996 18.5673 11.6663 18.5673 12.233 19.0267 12.6924 19.5934 12.6924H20.9739C21.5406 12.6924 22 12.233 22 11.6663 22 11.0996 21.5406 10.6402 20.9739 10.6402H19.5934ZM3.02616 10.6402C2.45945 10.6402 2.00005 11.0996 2.00005 11.6663 2.00005 12.2331 2.45945 12.6925 3.02616 12.6925H4.40671C4.97341 12.6925 5.43282 12.2331 5.43282 11.6663 5.43282 11.0996 4.97341 10.6402 4.40671 10.6402H3.02616ZM7.3555 16.3112C6.95477 15.9105 6.30507 15.9105 5.90435 16.3112L4.92416 17.2914C4.52344 17.6922 4.52344 18.3419 4.92416 18.7426 5.32489 19.1434 5.97459 19.1434 6.37531 18.7426L7.3555 17.7624C7.75622 17.3617 7.75622 16.712 7.3555 16.3112ZM18.0949 16.3112C17.6942 15.9105 17.0445 15.9105 16.6438 16.3112 16.243 16.712 16.243 17.3617 16.6438 17.7624L17.6239 18.7426C18.0247 19.1434 18.6744 19.1434 19.0751 18.7426 19.4758 18.3419 19.4758 17.6922 19.0751 17.2914L18.0949 16.3112ZM11.9995 18.2334C11.4328 18.2334 10.9734 18.6929 10.9734 19.2596V20.6402C10.9734 21.2069 11.4328 21.6663 11.9995 21.6663 12.5662 21.6663 13.0256 21.2069 13.0256 20.6402V19.2596C13.0256 18.6929 12.5662 18.2334 11.9995 18.2334Z"/>',
      }}
    />
  )
)

Sun.displayName = 'Sun'

export const tags = ['Sun', '']
