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
import Diagnostic4_1 from "@/pages/diagnostic4-1";
import Diagnostic4_2 from "@/pages/diagnostic4-2";
import Diagnostic4_3 from "@/pages/diagnostic4-3";
import ProductAIClarityFunnel from "@/pages/product-ai-clarity-funnel";
import ProductMentalPrioritySystem from "@/pages/product-mental-priority-system";
import ProductAIToolNavigator from "@/pages/product-ai-tool-navigator";
import Product3_70_24 from "@/pages/product-3-70-24";
import ClarityPriorityBundle from "@/pages/clarity-priority-bundle";
import ClarityDecisionBundle from "@/pages/clarity-decision-bundle";
import FullDecisionBundle from "@/pages/full-decision-bundle";
import AccessAIClarityFunnel from "@/pages/access-ai-clarity-funnel";
import AccessMentalPrioritySystem from "@/pages/access-mental-priority-system";
import AccessAIToolNavigator from "@/pages/access-ai-tool-navigator";
import Access37024DecisionFrame from "@/pages/access-3-70-24-decision-frame";
import AccessClarityPriorityBundle from "@/pages/access-clarity-priority-bundle";
import AccessClarityDecisionBundle from "@/pages/access-clarity-decision-bundle";
import AccessFullDecisionBundle from "@/pages/access-full-decision-bundle";
import ProductsAndPackages from "@/pages/products-and-packages";
import ClarityForBeginners from "@/pages/clarity-for-beginners";
import LegalTerms from "@/pages/legal-terms";
import LegalRefund from "@/pages/legal-refund";
import LegalPrivacy from "@/pages/legal-privacy";
import ThankYouPage from "@/pages/thank-you";
import SubPlaceholder from "@/pages/sub-placeholder";
import AvecoreAffiliateLandingPage from "@/pages/affiliate-landing";
import Contact from "@/pages/contact";
import MiniMentalPriorityMattersNow from "@/pages/mini-mental-priority-matters-now";
import MiniMentalPriorityCanWait from "@/pages/mini-mental-priority-can-wait";
import MiniMentalPriorityPressure from "@/pages/mini-mental-priority-pressure";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/placeholder/1" component={Diagnostic1} />
      <Route path="/placeholder/2" component={Diagnostic2} />
      <Route path="/mini-mental-priority-matters-now" component={MiniMentalPriorityMattersNow} />
      <Route path="/mini-mental-priority-can-wait" component={MiniMentalPriorityCanWait} />
      <Route path="/mini-mental-priority-pressure" component={MiniMentalPriorityPressure} />
      <Route path="/placeholder/3" component={Diagnostic3} />
      <Route path="/placeholder/4" component={Diagnostic4} />
      <Route path="/placeholder/:id" component={Placeholder} />
      <Route path="/sub-placeholder/1/1" component={Diagnostic1_1} />
      <Route path="/sub-placeholder/1/2" component={Diagnostic1_2} />
      <Route path="/sub-placeholder/1/3" component={Diagnostic1_3} />
      <Route path="/sub-placeholder/3/1" component={Diagnostic3_1} />
      <Route path="/sub-placeholder/3/2" component={Diagnostic3_2} />
      <Route path="/sub-placeholder/3/3" component={Diagnostic3_3} />
      <Route path="/sub-placeholder/3/3-1" component={Diagnostic3_3_1} />
      <Route path="/sub-placeholder/3/3-2" component={Diagnostic3_3_2} />
      <Route path="/sub-placeholder/4/1" component={Diagnostic4_1} />
      <Route path="/sub-placeholder/4/2" component={Diagnostic4_2} />
      <Route path="/sub-placeholder/4/3" component={Diagnostic4_3} />
      <Route path="/sub-placeholder/1/next" component={ProductAIClarityFunnel} />
      <Route path="/sub-placeholder/3/next" component={ProductAIToolNavigator} />
      <Route path="/sub-placeholder/4/next" component={Product3_70_24} />
      <Route path="/ai-clarity-funnel" component={ProductAIClarityFunnel} />
      <Route path="/mental-priority-system" component={ProductMentalPrioritySystem} />
      <Route path="/ai-tool-navigator" component={ProductAIToolNavigator} />
      <Route path="/3-70-24-decision-frame" component={Product3_70_24} />
      <Route path="/clarity-priority-bundle" component={ClarityPriorityBundle} />
      <Route path="/clarity-decision-bundle" component={ClarityDecisionBundle} />
      <Route path="/full-decision-bundle" component={FullDecisionBundle} />
      <Route path="/access/ai-clarity-funnel" component={AccessAIClarityFunnel} />
      <Route path="/access/mental-priority-system" component={AccessMentalPrioritySystem} />
      <Route path="/access/ai-tool-navigator" component={AccessAIToolNavigator} />
      <Route path="/access/3-70-24-decision-frame" component={Access37024DecisionFrame} />
      <Route path="/access/clarity-priority-bundle" component={AccessClarityPriorityBundle} />
      <Route path="/access/clarity-decision-bundle" component={AccessClarityDecisionBundle} />
      <Route path="/access/full-decision-bundle" component={AccessFullDecisionBundle} />
      <Route path="/diagnostic" component={ClarityForBeginners} />
      <Route path="/clarity-for-beginners" component={ClarityForBeginners} />
      <Route path="/affiliate-landing" component={AvecoreAffiliateLandingPage} />
      <Route path="/products-and-packages" component={ProductsAndPackages} />
      <Route path="/legal/terms" component={LegalTerms} />
      <Route path="/legal/refund" component={LegalRefund} />
      <Route path="/legal/privacy" component={LegalPrivacy} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYouPage} />
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
