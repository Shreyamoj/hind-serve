
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImage: string;
  bio: string;
  role: "customer" | "provider";
  providerDetails?: {
    serviceType: string;
    hourlyRate: number;
    experience: string;
    qualifications: string[];
  };
}

const Profile = () => {
  // Mock user data
  const [profile, setProfile] = useState<UserProfile>({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Delhi, India",
    profileImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    bio: "Professional electrician with over 8 years of experience in residential and commercial electrical work.",
    role: "provider",
    providerDetails: {
      serviceType: "Electrician",
      hourlyRate: 500,
      experience: "8 years",
      qualifications: ["Certified Electrician", "BTech in Electrical Engineering"]
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>({ ...profile });

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setProfile(editedProfile);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProviderDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      providerDetails: {
        ...prev.providerDetails!,
        [name]: name === 'hourlyRate' ? parseInt(value) : value
      }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you would upload the file to a server and get a URL back
      const reader = new FileReader();
      reader.onload = () => {
        setEditedProfile(prev => ({
          ...prev,
          profileImage: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button
              onClick={handleEditToggle}
              className={`${isEditing ? 'bg-green-600 hover:bg-green-700' : 'bg-hindserve-primary hover:bg-hindserve-primary/90'}`}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden">
            <div className="bg-hindserve-primary/10 p-8 flex flex-col lg:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src={isEditing ? editedProfile.profileImage : profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <div className="absolute bottom-0 right-0">
                    <label htmlFor="profileImage" className="bg-hindserve-primary text-white p-2 rounded-full cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </label>
                    <input 
                      type="file" 
                      id="profileImage" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{isEditing ? editedProfile.name : profile.name}</h2>
                <p className="text-hindserve-gray-600">
                  {profile.role === 'provider' ? profile.providerDetails?.serviceType : 'Customer'}
                </p>
                {profile.role === 'provider' && (
                  <div className="mt-2 flex items-center">
                    <div className="text-yellow-400 flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className="w-4 h-4"
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-hindserve-gray-700">4.9 (127 reviews)</span>
                  </div>
                )}
              </div>
            </div>
            
            <Tabs defaultValue="personal" className="p-6">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Personal Information</TabsTrigger>
                {profile.role === 'provider' && (
                  <TabsTrigger value="professional">Professional Details</TabsTrigger>
                )}
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        name="name"
                        value={editedProfile.name}
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.email}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        name="phone"
                        value={editedProfile.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.phone}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    {isEditing ? (
                      <Input
                        id="address"
                        name="address"
                        value={editedProfile.address}
                        onChange={handleChange}
                      />
                    ) : (
                      <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.address}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        name="bio"
                        value={editedProfile.bio}
                        onChange={handleChange}
                        rows={4}
                      />
                    ) : (
                      <p className="border border-hindserve-gray-200 rounded-md px-3 py-2 min-h-[100px]">{profile.bio}</p>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              {profile.role === 'provider' && (
                <TabsContent value="professional">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      {isEditing ? (
                        <Input
                          id="serviceType"
                          name="serviceType"
                          value={editedProfile.providerDetails?.serviceType}
                          onChange={handleProviderDetailsChange}
                        />
                      ) : (
                        <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.providerDetails?.serviceType}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Hourly Rate (₹)</Label>
                      {isEditing ? (
                        <Input
                          id="hourlyRate"
                          name="hourlyRate"
                          type="number"
                          value={editedProfile.providerDetails?.hourlyRate}
                          onChange={handleProviderDetailsChange}
                        />
                      ) : (
                        <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">₹{profile.providerDetails?.hourlyRate}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience</Label>
                      {isEditing ? (
                        <Input
                          id="experience"
                          name="experience"
                          value={editedProfile.providerDetails?.experience}
                          onChange={handleProviderDetailsChange}
                        />
                      ) : (
                        <p className="border border-hindserve-gray-200 rounded-md px-3 py-2">{profile.providerDetails?.experience}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>Qualifications & Certifications</Label>
                      <div className="border border-hindserve-gray-200 rounded-md p-4">
                        {profile.providerDetails?.qualifications.map((qualification, index) => (
                          <div key={index} className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-hindserve-primary rounded-full mr-2"></div>
                            <span>{qualification}</span>
                          </div>
                        ))}
                        {isEditing && (
                          <div className="mt-4">
                            <Button variant="outline" className="text-sm">Add Qualification</Button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label>Availability</Label>
                      <div className="border border-hindserve-gray-200 rounded-md p-4">
                        <div className="grid grid-cols-7 gap-2">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <div key={day} className="text-center">
                              <div className="font-medium mb-2">{day}</div>
                              <div className={`rounded-md p-2 ${day === 'Sun' ? 'bg-hindserve-gray-100 text-hindserve-gray-400' : 'bg-hindserve-primary/10 text-hindserve-primary'}`}>
                                {day === 'Sun' ? 'Off' : '9AM-5PM'}
                              </div>
                            </div>
                          ))}
                        </div>
                        {isEditing && (
                          <div className="mt-4">
                            <Button variant="outline" className="text-sm">Edit Availability</Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              <TabsContent value="security">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90">Update Password</Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-hindserve-gray-200 pt-6">
                    <h3 className="text-lg font-medium mb-4">Linked Accounts</h3>
                    <div className="flex items-center justify-between p-4 border rounded-md mb-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-red-500 mr-4" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                        <div>
                          <div className="font-medium">Google</div>
                          <div className="text-sm text-hindserve-gray-600">Connected</div>
                        </div>
                      </div>
                      <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Disconnect</Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-hindserve-gray-200 pt-6">
                    <h3 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h3>
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Delete Account</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
