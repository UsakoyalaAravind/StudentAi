import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  ClipboardList, 
  Plus, 
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Task {
  id: string;
  title: string;
  subject: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'inprogress' | 'done';
  description?: string;
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Linear Algebra Assignment',
    subject: 'Mathematics',
    dueDate: new Date(2024, 11, 15),
    priority: 'high',
    status: 'todo',
    description: 'Complete chapters 3-4 exercises'
  },
  {
    id: '2',
    title: 'Chemistry Lab Report',
    subject: 'Chemistry',
    dueDate: new Date(2024, 11, 18),
    priority: 'medium',
    status: 'inprogress',
    description: 'Organic synthesis experiment analysis'
  },
  {
    id: '3',
    title: 'Physics Quiz Preparation',
    subject: 'Physics',
    dueDate: new Date(2024, 11, 12),
    priority: 'high',
    status: 'todo',
    description: 'Review thermodynamics concepts'
  },
  {
    id: '4',
    title: 'History Essay',
    subject: 'History',
    dueDate: new Date(2024, 11, 20),
    priority: 'low',
    status: 'done',
    description: 'World War II impact analysis'
  }
];

export const TaskManagerPage = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    dueDate: new Date(),
    priority: 'medium' as const,
    description: ''
  });
  const [filter, setFilter] = useState('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const addTask = () => {
    if (!newTask.title || !newTask.subject) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive"
      });
      return;
    }

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      subject: newTask.subject,
      dueDate: newTask.dueDate,
      priority: newTask.priority,
      status: 'todo',
      description: newTask.description
    };

    setTasks(prev => [...prev, task]);
    setNewTask({
      title: '',
      subject: '',
      dueDate: new Date(),
      priority: 'medium',
      description: ''
    });
    setIsDialogOpen(false);
    
    toast({
      title: "Task Added",
      description: "Your new task has been created successfully",
    });
  };

  const updateTaskStatus = (taskId: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
    
    toast({
      title: "Task Updated",
      description: `Task moved to ${newStatus === 'todo' ? 'To Do' : newStatus === 'inprogress' ? 'In Progress' : 'Done'}`,
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-700 border-red-500/50';
      case 'medium': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/50';
      case 'low': return 'bg-green-500/20 text-green-700 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-700 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'inprogress': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    inprogress: tasks.filter(t => t.status === 'inprogress'),
    done: tasks.filter(t => t.status === 'done')
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                StudyAI
              </h1>
            </Link>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-6 w-6 text-secondary" />
              <h2 className="text-xl font-semibold">Task Manager</h2>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Task</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    placeholder="Task title*"
                    value={newTask.title}
                    onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  />
                  <Input
                    placeholder="Subject*"
                    value={newTask.subject}
                    onChange={(e) => setNewTask(prev => ({ ...prev, subject: e.target.value }))}
                  />
                  <Input
                    placeholder="Description (optional)"
                    value={newTask.description}
                    onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                  />
                  <Select value={newTask.priority} onValueChange={(value: any) => setNewTask(prev => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low Priority</SelectItem>
                      <SelectItem value="medium">Medium Priority</SelectItem>
                      <SelectItem value="high">High Priority</SelectItem>
                    </SelectContent>
                  </Select>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {format(newTask.dueDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={newTask.dueDate}
                        onSelect={(date) => date && setNewTask(prev => ({ ...prev, dueDate: date }))}
                      />
                    </PopoverContent>
                  </Popover>
                  <Button onClick={addTask} className="w-full gradient-primary">
                    Create Task
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card gradient-card border-0">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{tasks.length}</p>
              <p className="text-sm text-muted-foreground">Total Tasks</p>
            </CardContent>
          </Card>
          <Card className="shadow-card gradient-accent border-0">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-accent-foreground">{tasksByStatus.todo.length}</p>
              <p className="text-sm text-accent-foreground/80">To Do</p>
            </CardContent>
          </Card>
          <Card className="shadow-card gradient-secondary border-0">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-secondary-foreground">{tasksByStatus.inprogress.length}</p>
              <p className="text-sm text-secondary-foreground/80">In Progress</p>
            </CardContent>
          </Card>
          <Card className="shadow-card gradient-primary border-0">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary-foreground">{tasksByStatus.done.length}</p>
              <p className="text-sm text-primary-foreground/80">Completed</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tasks</SelectItem>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="list" className="space-y-4">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="shadow-card gradient-card border-0">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getStatusIcon(task.status)}
                        <h3 className="font-semibold">{task.title}</h3>
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{task.subject}</p>
                      {task.description && (
                        <p className="text-sm text-muted-foreground mb-2">{task.description}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Due: {format(task.dueDate, "PPP")}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {task.status !== 'todo' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTaskStatus(task.id, 'todo')}
                        >
                          To Do
                        </Button>
                      )}
                      {task.status !== 'inprogress' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTaskStatus(task.id, 'inprogress')}
                        >
                          In Progress
                        </Button>
                      )}
                      {task.status !== 'done' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateTaskStatus(task.id, 'done')}
                        >
                          Done
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="kanban">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(tasksByStatus).map(([status, statusTasks]) => (
                <Card key={status} className="shadow-card gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      {getStatusIcon(status)}
                      <span className="capitalize">
                        {status === 'inprogress' ? 'In Progress' : status === 'todo' ? 'To Do' : 'Done'}
                      </span>
                      <Badge variant="outline">{statusTasks.length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {statusTasks.map((task) => (
                      <Card key={task.id} className="p-3 bg-muted/50 hover:bg-muted transition-smooth cursor-pointer">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{task.title}</h4>
                            <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{task.subject}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(task.dueDate, "MMM dd")}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};