import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WalkerFill = React.forwardRef(
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
          '<path d="M18.0699 10.6677L15.6515 9.83276L13.2331 7.41725C13.1734 7.35761 13.1037 7.30791 13.034 7.2582L12.9942 7.22838C12.9942 7.22838 12.9345 7.18862 12.9047 7.16874C12.7653 7.08922 12.5961 7.01964 12.407 6.97988L12.2777 6.95999C12.2279 6.95999 12.1781 6.95005 12.1184 6.95005C12.0985 6.95005 12.0886 6.95005 12.0687 6.95005H12.0488C11.9592 6.95005 11.8497 6.95999 11.7402 6.97988L8.04792 7.89439C7.64983 7.99379 7.3214 8.23236 7.0925 8.56039L5.27122 11.284C4.77361 12.0296 4.9826 13.0336 5.71908 13.5206C5.97784 13.6896 6.28636 13.789 6.60483 13.789C7.15221 13.789 7.65978 13.5206 7.95835 13.0733L9.43129 10.8666L10.0782 10.7075L9.57063 13.7393C9.48106 14.2562 9.65025 14.7731 10.0185 15.1409L12.5862 17.7254L14.2681 21.0852C14.5368 21.622 15.1041 21.9699 15.7212 21.9699C15.97 21.9699 16.2188 21.9103 16.4377 21.8009C17.2339 21.4033 17.5623 20.4292 17.1643 19.6339L15.343 15.9958C15.2634 15.8367 15.1638 15.6976 15.0444 15.5783L12.9047 13.4411L13.1634 11.8904L13.6809 12.4073C13.8601 12.5862 14.0691 12.7155 14.3079 12.795L17.0448 13.7095C17.214 13.7592 17.3832 13.789 17.5424 13.789C18.2391 13.789 18.8661 13.3516 19.0851 12.6856C19.3637 11.8407 18.9059 10.9262 18.06 10.6479L18.0699 10.6677Z"/><path d="M9.83934 16.5624C9.65025 16.3735 9.40144 16.2741 9.13273 16.2741 9.11282 16.2741 9.08296 16.2741 9.06306 16.2741 8.77444 16.294 8.50573 16.4431 8.33654 16.6717L6.2565 19.4252C5.99774 19.7731 5.88827 20.1906 5.94798 20.618 6.00769 21.0455 6.2366 21.4232 6.57498 21.6817 6.85364 21.8904 7.18207 21.9998 7.54035 21.9998 8.05787 21.9998 8.53559 21.7612 8.83416 21.3536L10.8047 18.7493C11.1033 18.3516 11.0635 17.8049 10.7151 17.4471L9.82939 16.5624H9.83934ZM13.6511 6.62202C14.9349 6.62202 15.9899 5.60811 16.0098 4.36556 16.0197 3.74926 15.7908 3.16278 15.3629 2.71546 14.9449 2.26815 14.3776 2.0097 13.7606 1.99976 13.7606 1.99976 13.7207 1.99976 13.7108 1.99976 12.4668 1.99976 11.4218 3.01367 11.4019 4.25622 11.372 5.52858 12.3871 6.5922 13.661 6.61208L13.6511 6.62202Z"/>',
      }}
    />
  )
)

WalkerFill.displayName = 'WalkerFill'

export const tags = ['WalkerFill', '']
