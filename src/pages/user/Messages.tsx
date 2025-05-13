
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, Send } from "lucide-react";

interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
  read: boolean;
}

interface Conversation {
  id: number;
  user: {
    id: number;
    name: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: {
    text: string;
    timestamp: string;
    senderId: number;
    read: boolean;
  };
  messages: Message[];
}

const Messages = () => {
  const [activeConversationId, setActiveConversationId] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock data for conversations
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      user: {
        id: 101,
        name: "Rahul Sharma",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        online: true
      },
      lastMessage: {
        text: "I'll be there at 10 AM tomorrow.",
        timestamp: "2023-06-14T14:30:00",
        senderId: 101,
        read: true
      },
      messages: [
        {
          id: 1,
          senderId: 101,
          text: "Hello, I'm interested in booking your electrical service.",
          timestamp: "2023-06-14T12:30:00",
          read: true
        },
        {
          id: 2,
          senderId: 999, // Current user's ID
          text: "Hi Rahul, sure! What specific electrical issue are you facing?",
          timestamp: "2023-06-14T12:35:00",
          read: true
        },
        {
          id: 3,
          senderId: 101,
          text: "I need to fix the wiring in my living room. When can you come?",
          timestamp: "2023-06-14T12:40:00",
          read: true
        },
        {
          id: 4,
          senderId: 999,
          text: "I'm available tomorrow morning. Would 10 AM work for you?",
          timestamp: "2023-06-14T12:45:00",
          read: true
        },
        {
          id: 5,
          senderId: 101,
          text: "I'll be there at 10 AM tomorrow.",
          timestamp: "2023-06-14T14:30:00",
          read: true
        }
      ]
    },
    {
      id: 2,
      user: {
        id: 102,
        name: "Priya Singh",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        online: false
      },
      lastMessage: {
        text: "Thank you for your help with my math homework.",
        timestamp: "2023-06-13T18:20:00",
        senderId: 102,
        read: false
      },
      messages: [
        {
          id: 1,
          senderId: 102,
          text: "Hello, I need help with my math homework.",
          timestamp: "2023-06-13T17:30:00",
          read: true
        },
        {
          id: 2,
          senderId: 999,
          text: "Hi Priya, I'd be happy to help. What topic are you studying?",
          timestamp: "2023-06-13T17:35:00",
          read: true
        },
        {
          id: 3,
          senderId: 102,
          text: "I'm working on calculus problems. Can we schedule a session?",
          timestamp: "2023-06-13T17:40:00",
          read: true
        },
        {
          id: 4,
          senderId: 999,
          text: "Sure, I have availability this weekend. How about Saturday at 2 PM?",
          timestamp: "2023-06-13T17:45:00",
          read: true
        },
        {
          id: 5,
          senderId: 102,
          text: "Thank you for your help with my math homework.",
          timestamp: "2023-06-13T18:20:00",
          read: false
        }
      ]
    },
    {
      id: 3,
      user: {
        id: 103,
        name: "Amit Patel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        online: true
      },
      lastMessage: {
        text: "I've fixed the leaking pipe. Please check and let me know if there's anything else.",
        timestamp: "2023-06-12T16:10:00",
        senderId: 103,
        read: true
      },
      messages: [
        {
          id: 1,
          senderId: 999,
          text: "Hi Amit, I have a leaking pipe in my bathroom. Can you help?",
          timestamp: "2023-06-12T10:30:00",
          read: true
        },
        {
          id: 2,
          senderId: 103,
          text: "Hello! I can definitely help with that. Can you send me a picture of the leak?",
          timestamp: "2023-06-12T10:40:00",
          read: true
        },
        {
          id: 3,
          senderId: 999,
          text: "I'll take a picture and send it to you shortly.",
          timestamp: "2023-06-12T10:45:00",
          read: true
        },
        {
          id: 4,
          senderId: 103,
          text: "Great, I'll be waiting. Based on the picture, I can give you an estimate.",
          timestamp: "2023-06-12T10:50:00",
          read: true
        },
        {
          id: 5,
          senderId: 103,
          text: "I've fixed the leaking pipe. Please check and let me know if there's anything else.",
          timestamp: "2023-06-12T16:10:00",
          read: true
        }
      ]
    }
  ]);

  // Filter conversations based on search term
  const filteredConversations = conversations.filter(conv => 
    conv.user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Get the active conversation
  const activeConversation = conversations.find(conv => conv.id === activeConversationId);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeConversationId) return;

    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversationId) {
        const newMsg = {
          id: conv.messages.length + 1,
          senderId: 999, // Current user's ID
          text: newMessage,
          timestamp: new Date().toISOString(),
          read: true
        };
        
        return {
          ...conv,
          lastMessage: {
            text: newMessage,
            timestamp: new Date().toISOString(),
            senderId: 999,
            read: true
          },
          messages: [...conv.messages, newMsg]
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setNewMessage("");
  };

  // Format timestamp to readable time
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format timestamp to readable date if not today
  const formatMessageDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    }
  };

  // Scroll to bottom of messages when conversation changes or new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeConversation?.messages]);

  // Mark messages as read when opening a conversation
  useEffect(() => {
    if (activeConversationId) {
      const updatedConversations = conversations.map(conv => {
        if (conv.id === activeConversationId && !conv.lastMessage.read && conv.lastMessage.senderId !== 999) {
          const updatedMessages = conv.messages.map(msg => ({
            ...msg,
            read: true
          }));
          
          return {
            ...conv,
            lastMessage: {
              ...conv.lastMessage,
              read: true
            },
            messages: updatedMessages
          };
        }
        return conv;
      });
      
      setConversations(updatedConversations);
    }
  }, [activeConversationId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8">Messages</h1>
          
          <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden">
            <div className="flex h-[calc(80vh-100px)]">
              {/* Conversations Sidebar */}
              <div className="w-full md:w-1/3 lg:w-1/4 border-r border-hindserve-gray-100">
                <div className="p-4 border-b border-hindserve-gray-100">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hindserve-gray-400" size={18} />
                    <Input 
                      placeholder="Search conversations" 
                      className="pl-10"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="overflow-y-auto h-[calc(80vh-164px)]">
                  {filteredConversations.length > 0 ? (
                    filteredConversations.map(conv => (
                      <div 
                        key={conv.id} 
                        className={`p-4 border-b border-hindserve-gray-100 hover:bg-hindserve-gray-50 cursor-pointer transition-colors ${activeConversationId === conv.id ? 'bg-hindserve-primary/5' : ''}`}
                        onClick={() => setActiveConversationId(conv.id)}
                      >
                        <div className="flex items-center">
                          <div className="relative">
                            <img 
                              src={conv.user.avatar} 
                              alt={conv.user.name} 
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            {conv.user.online && (
                              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            )}
                          </div>
                          <div className="ml-3 flex-grow">
                            <div className="flex justify-between items-center">
                              <h3 className="font-semibold">{conv.user.name}</h3>
                              <span className="text-xs text-hindserve-gray-500">
                                {formatTime(conv.lastMessage.timestamp)}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <p className={`text-sm truncate max-w-[150px] ${!conv.lastMessage.read && conv.lastMessage.senderId !== 999 ? 'font-semibold text-hindserve-gray-900' : 'text-hindserve-gray-500'}`}>
                                {conv.lastMessage.senderId === 999 ? `You: ${conv.lastMessage.text}` : conv.lastMessage.text}
                              </p>
                              {!conv.lastMessage.read && conv.lastMessage.senderId !== 999 && (
                                <span className="w-2 h-2 bg-hindserve-primary rounded-full"></span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-8 text-center text-hindserve-gray-500">
                      No conversations found
                    </div>
                  )}
                </div>
              </div>
              
              {/* Message Content */}
              <div className="hidden md:flex md:flex-col w-2/3 lg:w-3/4">
                {activeConversation ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-hindserve-gray-100 flex items-center">
                      <div className="relative">
                        <img 
                          src={activeConversation.user.avatar} 
                          alt={activeConversation.user.name} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        {activeConversation.user.online && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">{activeConversation.user.name}</h3>
                        <p className="text-xs text-hindserve-gray-500">
                          {activeConversation.user.online ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    
                    {/* Messages */}
                    <div className="flex-grow overflow-y-auto p-4 bg-hindserve-gray-50">
                      {activeConversation.messages.map((message, index) => {
                        const isCurrentUser = message.senderId === 999;
                        const showDate = index === 0 || formatMessageDate(activeConversation.messages[index-1].timestamp) !== formatMessageDate(message.timestamp);
                        
                        return (
                          <div key={message.id}>
                            {showDate && (
                              <div className="flex justify-center my-4">
                                <span className="bg-hindserve-gray-200 text-hindserve-gray-600 text-xs px-3 py-1 rounded-full">
                                  {formatMessageDate(message.timestamp)}
                                </span>
                              </div>
                            )}
                            <div className={`flex mb-4 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[70%] rounded-lg p-3 ${isCurrentUser ? 'bg-hindserve-primary text-white' : 'bg-white border border-hindserve-gray-200'}`}>
                                <p>{message.text}</p>
                                <div className={`text-xs mt-1 flex justify-end ${isCurrentUser ? 'text-white/70' : 'text-hindserve-gray-500'}`}>
                                  {formatTime(message.timestamp)}
                                  {isCurrentUser && (
                                    <span className="ml-1">{message.read ? '✓✓' : '✓'}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef}></div>
                    </div>
                    
                    {/* Message Input */}
                    <div className="p-4 border-t border-hindserve-gray-100">
                      <div className="flex">
                        <Input
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          className="mr-2"
                          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <Button 
                          onClick={handleSendMessage}
                          className="bg-hindserve-primary hover:bg-hindserve-primary/90"
                        >
                          <Send size={18} />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-grow flex flex-col items-center justify-center bg-hindserve-gray-50">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-hindserve-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                      <p className="text-hindserve-gray-600 mb-4">
                        Select a conversation to view messages
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Mobile Empty State */}
              <div className="flex md:hidden w-full items-center justify-center bg-hindserve-gray-50">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-hindserve-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                  <p className="text-hindserve-gray-600">
                    View your conversations on a larger screen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messages;
