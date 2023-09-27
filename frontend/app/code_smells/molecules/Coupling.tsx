import { TextLink } from "@/app/components/atoms";
import { ToggleOpenPinkButton } from "@/app/components/molecules";
import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Link from "next/link";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const Coupling = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Box>
            <Flex className="gap-4 align-center mt-3  justify-between">
                <Heading as="h2" size="lg">
                    Coupling
                </Heading>
                <ToggleOpenPinkButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </Flex>
            {isOpen && (
                <Box>
                    <Text className="mt-1">
                        Coupling refers to the degree of interdependence between different
                        modules or classes in a system.
                        High coupling means that changes in one module may require
                        changes in many other modules, making the codebase more difficult
                        to maintain and modify. It is generally recommended to
                        minimize coupling by using loose coupling techniques such as
                        dependency injection and interfaces.
                    </Text>
                    <Heading as="h3" size="md" className="mt-3">
                        Separate components by responsibility
                    </Heading>
                    <Text className="mt-1 mb-2">
                        One example of coupling is when a file has more than one responsibility.
                        (Remember the <TextLink href="/solid" className="italic"> Single Responsability Principle?</TextLink>)
                        In this case a file takes a prop and checks if it's a header of a footer,
                        this should be avoided.
                    </Text>
                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const HeaderOrFooter = ({ isHeader }) => {
    if(isHeader){
        return (<div className="header">...</div>)
    } 
    return (<div className="footer">...</div>)   
}`
}
                    </SyntaxHighlighter>
                    <Text className="mt-1 mb-2">
                        In this case we want to make a Header component and a Footer component and manage
                        the display in it's parent component
                    </Text>
                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const ParentComponent = () => {
    ...
    isHeader ? <Header /> : <Footer />
}

const Header = () => {
    return (<div className="header">...</div>) 
}
const Footer = () => {
    return (<div className="footer">...</div>)   
}
`
}
                    </SyntaxHighlighter>
                    <Heading as="h3" size="md" className="mt-3">
                        Avoid prop drilling
                    </Heading>
                    <Text className="mt-1 mb-2">
                        Prop drilling is the process where you pass props from a parent component to a child component,
                        If your parent component and your child component share too much state, that's a sign of tight coupling and should be avoided.
                    </Text>
                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const ParentComponent = () => {
    ...
    const [prop1, setProp1] = useState()
    const [prop2, setProp2] = useState()
    const [prop3, setProp3] = useState()

    <ChildComponent prop1={prop1} .... prop3={prop3}/>
}

const ChildComponent = ({prop1, prop2, prop3}: IChildComponent) => {
    <GrandChildComponent prop1={prop1} .... prop3={prop3}/>
}
`
}
                    </SyntaxHighlighter>
                    <Text className="mt-1 mb-2">
                        In this scenario we want to separate the parent from the child and the grandchild,
                        we can do that by either creating a shared context or create components with better separation of concerns.
                        <br />
                        Remember to always be careful because we don't want to over-use context state.
                    </Text>

                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const ParentComponent = () => {
    const [prop1, setProp1] = useState()
    const [prop2, setProp2] = useState()
    const [prop3, setProp3] = useState()
    ...
    <ChildComponent />
}

const ChildComponent = () => {
    ....
    <GrandChildComponent />
}

const GrandChildComponent = () => {
    const {prop1, prop2, prop3} = useContext('SharedContext');
    return (...)
}

`
}
                    </SyntaxHighlighter>
                    <Heading as="h3" size="md" className="mt-3">
                        Fetch data close to where it's used
                    </Heading>
                    <Text className="mt-1 mb-2">
                        This is a personal preference, but I believe that data should be
                        fetched and handled in the component where is used to avoid coupling.
                        We can also use hooks to handle data fetching for us.

                        An example is a parent component that fetches data and passes it to a child component.
                    </Text>
                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const ParentComponent = () => {
    ...
    const data = useGetData()
    <ChildComponent data={data}/>
}
`
}
                    </SyntaxHighlighter>
                    <Text className="mt-1 mb-2">
                        Instead we should fetch the data directly in our child component.
                    </Text>
                    <SyntaxHighlighter
                        language="typescript"
                        style={docco}
                        showLineNumbers
                    >
                        {`
const ParentComponent = () => {
    ...
    <ChildComponent />
}

const ChildComponent = () => {
    data = useGetData();
    ....
}
`}
                    </SyntaxHighlighter>

                </Box>
            )}

        </Box>
    )
}