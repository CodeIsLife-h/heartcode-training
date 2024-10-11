import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Jiro from "@/assets/jiro ono.jpeg";

export default function AboutMe() {
  return (
    <div className="p-5">
        
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello, I am Jiro 
                </CardTitle>
                <CardDescription>
                    Sushi Master for 50 years
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Jiro} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Jiro Ono
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Making good food</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to make sushi</div>
            </CardContent>
        </Card>
    </div>
  );
}