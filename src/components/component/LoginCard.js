import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginCard = ({ handleSubmit, email, setEmail, password, setPassword, error }) => {
  return (
    <Card className="w-full max-w-md shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <CardHeader className="text-center space-y-2 p-6 bg-primary text-white">
        <h2 className="text-3xl font-extrabold">Login</h2>
        <p className="text-sm text-white/75">
          Enter your credentials to access your account
        </p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-gray-300 focus:border-primary focus:ring-primary"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center p-4 bg-gray-50">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
