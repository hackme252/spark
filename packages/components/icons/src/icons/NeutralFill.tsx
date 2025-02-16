import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const NeutralFill = React.forwardRef(
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
          '<path d="M12 2C6.47154 2 2 6.47154 2 12C2 17.5285 6.47154 22 12 22C17.5285 22 22 17.5285 22 12C22 6.47154 17.5285 2 12 2ZM16.8782 16.4716H7.12205C6.55295 16.4716 6.14644 16.0651 6.14644 15.496C6.14644 14.9268 6.55295 14.5203 7.12205 14.5203H16.8782C17.4473 14.5203 17.8538 14.9268 17.8538 15.496C17.8538 16.0651 17.366 16.4716 16.8782 16.4716ZM7.60962 9.56099C7.60962 8.82928 8.17873 8.26017 8.91044 8.26017C9.64214 8.26017 10.2112 8.82928 10.2112 9.56099C10.2112 10.2927 9.64214 10.8618 8.91044 10.8618C8.17873 10.8618 7.60962 10.2927 7.60962 9.56099ZM15.0894 8.17886C15.8211 8.17886 16.3902 8.74797 16.3902 9.47968C16.3902 10.2114 15.8211 10.7805 15.0894 10.7805C14.3577 10.7805 13.7886 10.2114 13.7886 9.47968C13.7073 8.82927 14.3577 8.17886 15.0894 8.17886Z"/>',
      }}
    />
  )
)

NeutralFill.displayName = 'NeutralFill'

export const tags = ['NeutralFill', '']
