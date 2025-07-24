import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
export default function Home() {
  return (
    <div>
        <Carousel>
  <CarouselContent>
    <CarouselItem><img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='photos'></img></CarouselItem>
    <CarouselItem><img src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D" className='photos'></img></CarouselItem>
    <CarouselItem><img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D" className='photos'></img></CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="bg bg-amber-900"/>
  <CarouselNext />
</Carousel>
    
           <div className="flex min-h-svh items-center justify-center">
       <Button
      variant="outline"
      onClick={() =>
        toast("Your report has been generated", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
     Generate Report 
    </Button>
      <Button className='ml-2' >Explore More</Button>
    </div>
    </div>
  )
}
