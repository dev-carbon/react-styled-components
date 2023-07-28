import { CardCaption, CardDescription, CardLink, CardWrapper } from "./style"

function Card({bg}) {

  return (
    <CardWrapper bg={bg}>
        <CardCaption>
          <CardLink to={"#"}>Astronomy D</CardLink>
          <CardDescription>Dr. Lorem Ipsum</CardDescription>
        </CardCaption>
    </CardWrapper>
  )
}

export default Card