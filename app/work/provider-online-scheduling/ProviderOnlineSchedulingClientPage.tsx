"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"

const ProviderOnlineSchedulingClientPage = () => {
  const [date, setDate] = useState<Date>()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-normal">Provider Online Scheduling</h1>
      <p className="text-gray-600 mb-8">This is a client-side page demonstrating online scheduling functionality.</p>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Book an Appointment</CardTitle>
          <CardDescription>Choose a date and time.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-4 gap-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date > new Date("2024-12-31")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" defaultValue="10:00 AM" className="col-span-3" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Book Appointment</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProviderOnlineSchedulingClientPage
