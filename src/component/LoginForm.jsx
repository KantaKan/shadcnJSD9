import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../components/ui/dialog";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export function LoginForm() {
  const [dialog, setDialog] = useState(false);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Generation FullStack</CardTitle>
          <CardDescription>Enter your email and password</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input id="email" type="email" placeholder="youremail@mail.com" required></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Password</Label>
                <Input type="password" id="password"></Input>
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  toast("Logged in");
                  setDialog(!dialog);
                }}
              >
                Login
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogTitle>
          <DialogDescription>
            <DialogContent className="text-lime-300 text-3xl w-auto">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <img className="w-full h-[420px] object-cover" src="https://i.pinimg.com/736x/96/08/a8/9608a84ceb6aa5cc80cf88235dcb6d7e.jpg" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className="w-full h-[420px] object-cover" src="https://i.pinimg.com/736x/09/2c/b0/092cb04bbe9c742274b0225a53d16b3b.jpg" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img className="w-full h-[420px] object-cover" src="https://i.pinimg.com/736x/50/46/23/5046232da3cc12780b7691fe161009c9.jpg" alt="" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </DialogDescription>
        </DialogTitle>
      </Dialog>
    </div>
  );
}
