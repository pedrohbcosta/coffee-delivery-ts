type StoreItemProps = {
  id: number,
  name: string,
  tag?: string,
  description: string,
  price: number,
  imgUrl: string,
}

export function StoreItem({ id, name, tag, description, price, imgUrl }: StoreItemProps) {
  return (
    <div>
      <img src={imgUrl} alt="" />
    </div>
  )
}