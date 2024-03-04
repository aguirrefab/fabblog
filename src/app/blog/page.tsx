import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { getPosts } from "@/lib/data";

export default function BlogPage() {
  const post = getPosts();

  console.log(post);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-4">
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
        <div className="Card flex flex-col justify-center items-center">
          <Card>
            <Image
              alt="agency-work-team"
              height={250}
              src={"/about.png"}
              width={250}
            />
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>{" "}
        </div>
      </section>
    </>
  );
}
