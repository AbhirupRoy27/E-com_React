import { useSelected } from '../../../../Contexts/SelectContext'

export default function Books() {
  const { vehicle } = useSelected()
  return (
    <div style={{ fontSize: '70px' }}>
      <h1>Books</h1>
      <h1>{vehicle}</h1>
    </div>
  )
}
