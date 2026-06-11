"use client";

import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Cart";
import TemplateCard from "@/components/templates/TemplateCard";
import Button from "@/components/ui/Buttonn";
import Input from "@/components/ui/Inputt";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Texttarea";
import { PlusCircle, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Templates({
  initialTemplates = [],
  dashboardData = [],
}) {
  const router = useRouter();
  const [templates, setTemplates] = useState(initialTemplates);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newTemplate, setNewTemplate] = useState({
    name: "",
    description: "",
    category: "Other",
    tone: "Professional",
    prompt_template: "",
    instructions: "",
    icon: "FileText",
  });

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "Research", label: "🔍 Research" },
    { value: "SEO", label: "📈 SEO" },
    { value: "Content", label: "✍️ Content" },
    { value: "Creative", label: "🎨 Creative" },
    { value: "Video", label: "🎬 Video" },
    { value: "Ads", label: "📢 Ads" },
    { value: "Blog Post", label: "📝 Blog Post" },
    { value: "Email", label: "✉️ Email" },
    { value: "Social Media", label: "📱 Social Media" },
    { value: "Marketing", label: "💼 Marketing" },
    { value: "Product Description", label: "🛍️ Product Description" },
    { value: "Landing Page", label: "📰 Landing Page" },
    { value: "Newsletter", label: "📰 Newsletter" },
    { value: "Report", label: "📊 Report" },
    { value: "Other", label: " Other" },
  ];

  const toneOptions = [
    { value: "Professional", label: "Professional" },
    { value: "Casual", label: "Casual" },
    { value: "Creative", label: "Creative" },
    { value: "Academic", label: "Academic" },
  ];

  const campaigns = dashboardData?.campaigns || [];

  const filteredTemplates = React.useMemo(() => {
    let filtered = [...templates];

    if (categoryFilter !== "all") {
      filtered = filtered.filter((t) => t.category === categoryFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          (t.description && t.description.toLowerCase().includes(query)),
      );
    }

    return filtered;
  }, [templates, searchQuery, categoryFilter]);

  const handleUseTemplate = (template) => {
    router.push(`Create?template=${template.id}`);
  };

  const handleEditTemplate = (template) => {
    setNewTemplate(template);
    setShowCreateModal(true);
  };

  const handleDuplicateTemplate = async (template) => {
    console.log("Duplicate template later:", template);
  };

  const handleDeleteTemplate = async (template) => {
    console.log("Duplicate template later:", template);
  };

  const handleCreateTemplate = async () => {
    if (!newTemplate.name.trim()) {
      alert("Please enter a template name");
      return;
    }

    try {
      if (newTemplate.id) {
        await base44.entities.Template.update(newTemplate.id, newTemplate);
      } else {
        await base44.entities.Template.create(newTemplate);
      }
      setShowCreateModal(false);
      setNewTemplate({
        name: "",
        description: "",
        category: "Other",
        tone: "Professional",
        prompt_template: "",
        instructions: "",
        icon: "FileText",
      });
      loadTemplates();
    } catch (error) {
      console.error("Error saving template:", error);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Template Library
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Reusable templates for faster content creation
            </p>
          </div>

          <Button onClick={() => setShowCreateModal(true)}>
            <PlusCircle className="w-5 h-5 mr-2" />
            New Template
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
                  />
                </div>
              </div>

              <Select
                options={categoryOptions}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                campaigns={campaigns}
                template={template}
                onUse={handleUseTemplate}
                onEdit={handleEditTemplate}
                onDuplicate={handleDuplicateTemplate}
                onDelete={handleDeleteTemplate}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No templates found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filters
              </p>
            </CardContent>
          </Card>
        )}

        {/* Create/Edit Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>
                  {newTemplate.id ? "Edit" : "Create"} Template
                </CardTitle>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Template Name"
                  value={newTemplate.name}
                  onChange={(e) =>
                    setNewTemplate({ ...newTemplate, name: e.target.value })
                  }
                />

                <Textarea
                  label="Description"
                  rows={2}
                  value={newTemplate.description}
                  onChange={(e) =>
                    setNewTemplate({
                      ...newTemplate,
                      description: e.target.value,
                    })
                  }
                />

                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Category"
                    options={categoryOptions.filter((o) => o.value !== "all")}
                    value={newTemplate.category}
                    onChange={(e) =>
                      setNewTemplate({
                        ...newTemplate,
                        category: e.target.value,
                      })
                    }
                  />

                  <Select
                    label="Tone"
                    options={toneOptions}
                    value={newTemplate.tone}
                    onChange={(e) =>
                      setNewTemplate({ ...newTemplate, tone: e.target.value })
                    }
                  />
                </div>

                <Textarea
                  label="Prompt Template"
                  rows={4}
                  value={newTemplate.prompt_template}
                  onChange={(e) =>
                    setNewTemplate({
                      ...newTemplate,
                      prompt_template: e.target.value,
                    })
                  }
                />

                <Textarea
                  label="Instructions"
                  rows={3}
                  value={newTemplate.instructions}
                  onChange={(e) =>
                    setNewTemplate({
                      ...newTemplate,
                      instructions: e.target.value,
                    })
                  }
                />

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleCreateTemplate} className="flex-1">
                    {newTemplate.id ? "Update" : "Create"} Template
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
