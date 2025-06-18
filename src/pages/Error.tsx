import { Icons } from "@/Components/icons";
import Footer from "@/Components/layouts/Footer";
import Header from "@/Components/layouts/Header";
import { Button } from "@/Components/ui/button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Link } from "react-router-dom";
export default function Error() {
  return (
  <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="mx-auto my-32 flex flex-1 items-center">
        <Card className="w-[350px] md:w-[500px] lg:w-[500px]">
          <CardHeader className="flex flex-col items-center gap-2">
            <div className="border-muted-foreground/70 mt-2 mb-4 grid size-24 place-items-center rounded-full border border-dashed">
              <Icons.exclamation
                className=" size-10 text-red-700"
                aria-hidden="true"
              />
            </div>
            <CardTitle>Oops!</CardTitle>
            <CardDescription>An error occurs accidently.</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button variant="outline" asChild>
              <Link to="/">Go to Home Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
