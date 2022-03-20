import { Anchor, Image } from './styles'
const DEFAULT_IMAGE = 'http://samherbert.net/svg-loaders/svg-loaders/rings.svg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '', loading = true }) => (
  <Anchor href={path}>
    <Image src={cover} loading={loading} />
    {emoji}
  </Anchor>
)
