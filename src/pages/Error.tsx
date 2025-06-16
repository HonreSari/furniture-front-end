import Header from "@/Components/layouts/Header";
import { Button } from "@/Components/ui/button";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 mt-20 items-center justify-center">
        <Card className="md:w-[200px] lg:w-[400px]">
          <CardHeader>
            <CardTitle className="text-3xl lg:text-5xl text-center font-bold">404!</CardTitle>
            <CardDescription className="text-center">An error occurs Accidently</CardDescription>
            <CardAction></CardAction>
          </CardHeader>
          <CardFooter  className="flex justify-center" >
            <Link to="/">
            <Button variant="outline">Click Here!</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
