import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Placeholder from "@/pages/placeholder";
import Diagnostic1 from "@/pages/diagnostic1";
import Diagnostic2 from "@/pages/diagnostic2";
import Diagnostic3 from "@/pages/diagnostic3";
import Diagnostic4 from "@/pages/diagnostic4";
import Diagnostic1_1 from "@/pages/diagnostic1-1";
import Diagnostic1_2 from "@/pages/diagnostic1-2";
import Diagnostic1_3 from "@/pages/diagnostic1-3";
import Diagnostic2_1 from "@/pages/diagnostic2-1";
import Diagnostic2_2 from "@/pages/diagnostic2-2";
import Diagnostic2_3 from "@/pages/diagnostic2-3";
import Diagnostic3_1 from "@/pages/diagnostic3-1";
import Diagnostic3_2 from "@/pages/diagnostic3-2";
import Diagnostic3_3 from "@/pages/diagnostic3-3";
import Diagnostic3_3_1 from "@/pages/diagnostic3-3-1";
import Diagnostic3_3_2 from "@/pages/diagnostic3-3-2";
import SubPlaceholder from "@/pages/sub-placeholder";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/placeholder/1" component={Diagnostic1} />
      <Route path="/placeholder/2" component={Diagnostic2} />
      <Route path="/placeholder/3" component={Diagnostic3} />
      <Route path="/placeholder/4" component={Diagnostic4} />
      <Route path="/placeholder/:id" component={Placeholder} />
      <Route path="/sub-placeholder/1/1" component={Diagnostic1_1} />
      <Route path="/sub-placeholder/1/2" component={Diagnostic1_2} />
      <Route path="/sub-placeholder/1/3" component={Diagnostic1_3} />
      <Route path="/sub-placeholder/2/1" component={Diagnostic2_1} />
      <Route path="/sub-placeholder/2/2" component={Diagnostic2_2} />
      <Route path="/sub-placeholder/2/3" component={Diagnostic2_3} />
      <Route path="/sub-placeholder/3/1" component={Diagnostic3_1} />
      <Route path="/sub-placeholder/3/2" component={Diagnostic3_2} />
      <Route path="/sub-placeholder/3/3" component={Diagnostic3_3} />
      <Route path="/sub-placeholder/3/3-1" component={Diagnostic3_3_1} />
      <Route path="/sub-placeholder/3/3-2" component={Diagnostic3_3_2} />
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
