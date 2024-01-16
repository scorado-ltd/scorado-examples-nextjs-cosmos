import { Heading1 } from "~f/framework/heading";
import FullContainer from "~f/framework/layout/container";
import { MainContainer } from "~f/framework/layout/mainContainer";

export default function Page() {
    return (
        <MainContainer>
            <FullContainer>
                <Heading1>Search Page</Heading1>
            </FullContainer>
        </MainContainer>
    );
}