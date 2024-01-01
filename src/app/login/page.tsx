import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";
import { MainContainer } from "~f/framework/layout/mainContainer";

export default function Page() {
    return (
        <MainContainer>
            <FullContainer>
                <Heading1>Login Page</Heading1>
                <p>Login Form Here...</p>
            </FullContainer>
        </MainContainer>
    );
}