import {render,screen,fireEvent} from "@testing-library/react"
import App from "../App"
import { Button } from "./Button"


describe("Button CHeck",()=>{
    test("should Button present ADD",()=>{
        render(<Button>ADD</Button>)
        let button=screen.getByText("ADD")
        expect(button).toBeInTheDocument()

    })
    test("should Button present REDUCE",()=>{
        render(<Button>REDUCE</Button>)
        let button=screen.getByText("REDUCE")
        expect(button).toBeInTheDocument()
    })
    test("should be render a empty button",()=>{
        render(<Button></Button>)
        let button=screen.getByTestId("cButton")
        expect(button).toBeEmptyDOMElement()
    })
    test("counter should be zero",()=>{
        render(<App></App>)
        let h1=screen.getByText(`counter:-${0}`)
        expect(h1).toHaveTextContent(0)

    })
    test("counter should increment by 5",()=>{
        render(<App></App>)
        let h1=screen.getByText(`counter:-${0}`)
        let button=screen.getByText("ADD")
        fireEvent.click(button)
        expect(h1).toHaveTextContent(10)

    })
    test("counter should decrement by -5",()=>{
        render(<App></App>)
        // let mochFn=jest.fn()
        let h1=screen.getByText(`counter:-${0}`)
        let button=screen.getByText("REDUCE")
        fireEvent.click(button)
        expect(h1).toHaveTextContent(-10)

    })

})