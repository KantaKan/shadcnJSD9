import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
export function LoginForm() {
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
    </div>
  );
}
