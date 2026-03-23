import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Placeholder from "@/pages/placeholder";
import Diagnostic1 from "@/pages/diagnostic1";
import Diagnostic1_1 from "@/pages/diagnostic1-1";
import SubPlaceholder from "@/pages/sub-placeholder";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/placeholder/1" component={Diagnostic1} />
      <Route path="/placeholder/:id" component={Placeholder} />
      <Route path="/sub-placeholder/1/1" component={Diagnostic1_1} />
      <Route path="/sub-placeholder/:parentId/:id" component={SubPlaceholder} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
