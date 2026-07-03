function ProductDescription({ description }) {
  return (
    <div className="py-5">
      <h1 className="text-xl font-bold pb-4 border-b-2 border-white">
        Product Details
      </h1>
      <div className="py-2">
        <h2 className="font-semibold text-lg py-3">Description</h2>
        {description ? (
          <p>{description}</p>
        ) : (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatibus vero veritatis suscipit quidem, ut ipsam dignissimos
            quis recusandae assumenda a adipisci minima harum ex necessitatibus
            nihil doloribus maxime obcaecati architecto quam aperiam perferendis
            autem officia. Doloribus reprehenderit placeat unde quisquam
            provident sit sed eligendi veritatis, vitae ipsam? Nam optio nobis
            id tempore consequuntur non autem consequatur tenetur. Harum ab
            ducimus recusandae dolorum reprehenderit veritatis quam dignissimos
            a. Eos dolorum ut mollitia debitis, saepe ullam nihil nisi sequi
            corrupti repellendus harum tempora adipisci velit amet sint et
            aperiam a. Tempora dolor amet qui dicta deserunt asperiores
            voluptatum corrupti praesentium eveniet!
          </p>
        )}
      </div>
      <div className="py-2">
        <h2 className="font-semibold text-lg py-3">About the Author</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptatibus vero veritatis suscipit quidem, ut ipsam dignissimos quis
          recusandae assumenda a adipisci minima harum ex necessitatibus nihil
          doloribus maxime obcaecati architecto quam aperiam perferendis autem
          officia. Doloribus reprehenderit placeat unde quisquam provident sit
          sed eligendi veritatis, vitae ipsam? Nam optio nobis id tempore
          consequuntur non autem consequatur tenetur. Harum ab ducimus
          recusandae dolorum reprehenderit veritatis quam dignissimos a. Eos
          dolorum ut mollitia debitis, saepe ullam nihil nisi sequi corrupti
          repellendus harum tempora adipisci velit amet sint et aperiam a.
          Tempora dolor amet qui dicta deserunt asperiores voluptatum corrupti
          praesentium eveniet!
        </p>
      </div>
    </div>
  )
}

export default ProductDescription
