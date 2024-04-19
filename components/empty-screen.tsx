import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'כמה עולה אייפון?',
    message: 'כמה עולה אייפון?'
  },
  {
    heading: 'What time is sunset in Tel Aviv?',
    message: 'What time is sunset in Tel Aviv?'
  },
  {
    heading: 'When does the next Shannon Messenger book come out?',
    message: 'When does the next Shannon Messenger book come out?'
  },
  {
    heading: 'מה השעה בסן פרנסיסקו?',
    message: 'מה השעה בסן פרנסיסקו?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
