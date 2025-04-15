import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your website settings and configurations</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Bot</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Excel Trading LLC (OPC)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="exceltrdguae@gmail.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+971 50 3838194" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="Dubai, UAE" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="about">About Company</Label>
                <Textarea
                  id="about"
                  rows={4}
                  defaultValue="Excel Trading LLC (OPC) is one of the main industrial product supplier for a wide range of industrial tools and equipment all over the UAE."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta-title">Meta Title</Label>
                <Input
                  id="meta-title"
                  defaultValue="Excel Trading LLC - Industrial Tools & Equipment Supplier in UAE"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta-description">Meta Description</Label>
                <Textarea
                  id="meta-description"
                  rows={3}
                  defaultValue="Excel Trading LLC is a leading supplier of industrial tools and equipment across the UAE, offering premium quality products and excellent service."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input id="keywords" defaultValue="industrial tools, equipment, UAE, Dubai, safety equipment" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize the appearance of your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-md bg-green-600"></div>
                    <Input defaultValue="#16a34a" className="w-32" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-md bg-red-600"></div>
                    <Input defaultValue="#dc2626" className="w-32" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-md bg-gray-800"></div>
                    <Input defaultValue="#1f2937" className="w-32" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-16 border rounded-md flex items-center justify-center">
                    <span className="text-sm text-gray-500">Current Logo</span>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 border rounded-md flex items-center justify-center">
                    <span className="text-sm text-gray-500">Current Favicon</span>
                  </div>
                  <Button variant="outline">Upload New Favicon</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure email notifications for different events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">New Inquiry Notifications</Label>
                  <p className="text-sm text-gray-500">Receive email notifications when a new inquiry is submitted</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Quote Request Notifications</Label>
                  <p className="text-sm text-gray-500">Receive email notifications when a quote is requested</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Contact Form Submissions</Label>
                  <p className="text-sm text-gray-500">Receive email notifications for contact form submissions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2 pt-4">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" defaultValue="exceltrdguae@gmail.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Bot Settings</CardTitle>
              <CardDescription>Configure your WhatsApp business integration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Enable WhatsApp Bot</Label>
                  <p className="text-sm text-gray-500">Allow customers to contact you via WhatsApp</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp-number">WhatsApp Business Number</Label>
                <Input id="whatsapp-number" defaultValue="+971 50 3838194" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="welcome-message">Welcome Message</Label>
                <Textarea
                  id="welcome-message"
                  rows={3}
                  defaultValue="Welcome to Excel Trading LLC! How can we assist you today? Our team is ready to help with your industrial equipment needs."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="auto-replies">Auto Replies</Label>
                <div className="border rounded-md p-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Trigger word/phrase" defaultValue="pricing" />
                    <Input
                      placeholder="Response"
                      defaultValue="Thank you for your interest in our pricing. Please let us know which product you're inquiring about, and we'll provide you with a quote."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Trigger word/phrase" defaultValue="catalog" />
                    <Input
                      placeholder="Response"
                      defaultValue="You can download our latest catalog from our website at exceltradinguae.com/catalog or we can email it to you. Would you like us to send it via email?"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    + Add Auto Reply
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
