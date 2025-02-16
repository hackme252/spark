import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const PinFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.2752C4 5.99456 7.58172 2.52441 12 2.52441C16.4183 2.52441 20 5.99456 20 10.2752C20 11.411 19.587 12.7293 19.0254 13.9995C18.4539 15.2923 17.6844 16.632 16.8778 17.8405C16.0719 19.0477 15.211 20.1507 14.4449 20.9642C14.0641 21.3686 13.6858 21.724 13.3324 21.9867C13.1558 22.118 12.9647 22.2418 12.7654 22.3365C12.5777 22.4257 12.3101 22.5244 12 22.5244C11.6899 22.5244 11.4223 22.4257 11.2346 22.3365C11.0353 22.2418 10.8442 22.118 10.6676 21.9867C10.3142 21.724 9.9359 21.3686 9.55506 20.9642C8.78895 20.1507 7.92805 19.0477 7.12222 17.8405C6.31556 16.632 5.5461 15.2923 4.97459 13.9995C4.41304 12.7293 4 11.411 4 10.2752ZM12.0002 12.0949C13.5238 12.0949 14.759 10.8982 14.759 9.422C14.759 7.9458 13.5238 6.74911 12.0002 6.74911C10.4765 6.74911 9.24132 7.9458 9.24132 9.422C9.24132 10.8982 10.4765 12.0949 12.0002 12.0949Z"/>',
      }}
    />
  )
)

PinFill.displayName = 'PinFill'

export const tags = ['PinFill', '']
