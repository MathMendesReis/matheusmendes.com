import { Twitter, Mail, Github } from "lucide-react";
interface Data {
  id: string
  url: string,
  icon: React.ReactNode,
  description: string
}
export const contatos: Data[] = [
  {
    id: '1',
    url: "https://twitter.com/reisMatheusss",
    icon: <Twitter color='white'/>,
    description: "Twitter"
  },
  {
    id: '2',
    url: "matheusmendesreiss@gmail.com",
    icon: <Mail color='white' />,
    description: "Gmail"
  },
  {
    id: '3',
    url: "https://github.com/MathMendesReis",
    icon: <Github color='white'/>,
    description: "Github"
  },
]