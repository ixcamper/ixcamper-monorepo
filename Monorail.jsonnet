local paths = {
  project_frontend_path: "frontend",		
  project_frontend_command: "npx nx build frontend",
  
  project_backend_path: "backend",		
  project_backend_command: "npx nx build backend",

};


local commands(cmd_paths) = 
  {
    definitions: {
      [x[0]] : {path: x[1]} for x in cmd_paths
    }
  };

local frontend_commands = commands([
  ["shell", paths.project_frontend_command],
]);

local backend_commands = commands([
  ["shell", paths.project_backend_command],
]);

// Define sequences
local sequences = {
  dev: [
    "frontend",
    "backend"
  ]
};

{
  source: {
    path: std.thisFile,
  },
  targets: [
	{
		path: paths.project_frontend_path,
		commands: frontend_commands
	},
	{
		path: paths.project_backend_path,
		commands: backend_commands
	}
  ],
  sequences: sequences
}